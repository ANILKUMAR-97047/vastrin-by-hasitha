import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Otp from "@/models/Otp";

export async function POST(req) {
  try {
    console.log(" Signup API called");

    const { fullName, email, otp } = await req.json();

    if (!fullName || !email || !otp) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    }

    await connectDB();

    // 1. Find OTP
    const otpRecord = await Otp.findOne({ email, otp });

    if (!otpRecord) {
      return NextResponse.json(
        { message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // 2. Check expiry
    if (otpRecord.expiresAt < new Date()) {
      return NextResponse.json(
        { message: "OTP expired" },
        { status: 400 }
      );
    }

    // 3. Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // 4. Create user
    const user = await User.create({
      fullName,
      email,
      isVerified: true,
    });

    // 5. Delete OTP after use
    await Otp.deleteMany({ email });

    return NextResponse.json({
      message: "User created successfully",
      user,
    });

  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Signup failed" },
      { status: 500 }
    );
  }
}