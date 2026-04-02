"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

const LOGIN_BG_URL = "/images/auth/loginbg.png";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Independent loading states
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const otpRefs = useRef([]);
  
  const router = useRouter();
  // Validation Helpers
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // 1. Backend API: Send OTP
  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Email is required to send OTP.");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsVerifying(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to send OTP");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Verification code sent to your email!");
      otpRefs.current[0]?.focus();
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setIsVerifying(false);
    }
  };

  // 2. Backend API: Create Account / Verify & Signup
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!fullName || !email) {
      toast.error("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    const finalOtp = otp.join("");
    if (finalOtp.length !== 6) {
      toast.error("Please enter the 6-digit verification code.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          otp: finalOtp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("Signup Successful!");
      router.push('/components/auth/login');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.value !== "" && index < 5) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center font-inknut"
      style={{ backgroundImage: `url(${LOGIN_BG_URL})` }}
    >
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-xl transition-all duration-300">
        <h1 className="text-2xl md:text-3xl font-bold text-[#FF6A88] text-center mb-3 tracking-wider">
          Sign up
        </h1>

        <p className="text-[#4A4A5A] text-center mb-6 font-bold tracking-wide text-sm md:text-base">
          Please fill in the information below:
        </p>

        <div className="mb-2.5">
          <label className="block text-sm font-bold text-[#4A4A5A] mb-1">
            Full name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300"
          />
        </div>

        <div className="mb-2.5">
          <label className="block text-sm font-bold text-[#4A4A5A] mb-1">
            E-mail
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={isVerifying}
              className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-black underline hover:text-gray-700 transition-colors disabled:text-gray-400 text-sm cursor-pointer"
            >
              {isVerifying ? "Sending..." : "Verify"}
            </button>
          </div>
        </div>

        <div className="mb-4 mt-4">
          <label className="block text-sm font-bold text-[#4A4A5A] mb-1">
            Otp
          </label>
          <div className="flex gap-2 justify-start">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (otpRefs.current[index] = el)}
                onChange={(e) => handleOtpChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-9 h-9 md:w-10 md:h-10 text-center text-lg font-bold bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400"
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleSignupSubmit}
          disabled={isSubmitting}
          className="w-full py-2.5 bg-[#FF6A88] text-white font-bold rounded hover:bg-[#ff5e7a] transition-colors shadow-sm text-base md:text-lg tracking-wide cursor-pointer"
        >
          {isSubmitting ? "Processing..." : "Create account"}
        </button>

        <div className="mt-4 text-center text-sm font-bold text-[#4A4A4A]">
          Already have an account?{" "}
          <Link
            href="/components/auth/login"
            className="text-[#4D6A39] hover:text-[#4a5937]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
