// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import User from "@/models/User";
// import Otp from "@/models/Otp";

// export async function POST(req) {
//   try {
//     console.log(" Signup API called");

//     const { fullName, email, otp } = await req.json();

//     if (!fullName || !email || !otp) {
//       return NextResponse.json(
//         { message: "All fields required" },
//         { status: 400 }
//       );
//     }

//     await connectDB();

//     // 1. Find OTP
//     const otpRecord = await Otp.findOne({ email, otp });

//     if (!otpRecord) {
//       return NextResponse.json(
//         { message: "Invalid OTP" },
//         { status: 400 }
//       );
//     }

//     // 2. Check expiry
//     if (otpRecord.expiresAt < new Date()) {
//       return NextResponse.json(
//         { message: "OTP expired" },
//         { status: 400 }
//       );
//     }

//     // 3. Check existing user
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return NextResponse.json(
//         { message: "User already exists" },
//         { status: 400 }
//       );
//     }

//     // 4. Create user
//     const user = await User.create({
//       fullName,
//       email,
//       isVerified: true,
//     });

//     // 5. Delete OTP after use
//     await Otp.deleteMany({ email });

//     return NextResponse.json({
//       message: "User created successfully",
//       user,
//     });

//   } catch (error) {
//     console.error("Signup error:", error);
//     return NextResponse.json(
//       { message: "Signup failed" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import Otp from "@/models/Otp";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    console.log(" Signup API called");

    const { fullName, email, otp } = await req.json();

    if (!fullName || !email || !otp) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 },
      );
    }

    await connectDB();

    // 1. Validate OTP
    const otpRecord = await Otp.findOne({ email, otp });

    if (!otpRecord) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    }

    if (otpRecord.expiresAt < new Date()) {
      return NextResponse.json({ message: "OTP expired" }, { status: 400 });
    }

    // 2. Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 },
      );
    }

    // 3. Create user
    const user = await User.create({
      fullName,
      email,
      isVerified: true,
    });

    //  4. Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2m" },
    );

    //  5. Set cookie (AUTO LOGIN)
    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 2, // 2 minutes
      
    });
//maxAge: 60 * 60 * 24 * 7, // 7 days
    // 6. Cleanup OTP
    await Otp.deleteMany({ email });

    return NextResponse.json({
      message: "Signup successful",
      user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Signup failed" }, { status: 500 });
  }
}
