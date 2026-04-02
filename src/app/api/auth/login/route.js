import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Otp from "@/models/Otp";

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const otpRecord = await Otp.findOne({ email, otp });

    if (!otpRecord) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    }

    if (otpRecord.expiresAt < new Date()) {
      return NextResponse.json({ message: "OTP expired" }, { status: 400 });
    }

    await Otp.deleteMany({ email });

    return NextResponse.json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Login failed" },
      { status: 500 }
    );
  }
}