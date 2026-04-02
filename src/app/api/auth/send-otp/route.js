import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Otp from "@/models/Otp";
import { generateOTP } from "@/lib/otp";
import { sendOtpMail } from "@/lib/mail";

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log("Received email for OTP:", email);
    if (!email) {
      return NextResponse.json({ message: "Email required" }, { status: 400 });
    }

    await connectDB();

    const otp = generateOTP();
    console.log("Generated OTP:", otp);
    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 mins
    });

    await sendOtpMail(email, otp);

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send OTP" },
      { status: 500 },
    );
  }
}
