"use client";
import { useAuth } from "@/app/context/AuthContext";

import Link from "next/link";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LOGIN_BG_URL = "/images/auth/loginbg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const router = useRouter();
  // Separated loading states
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { fetchUser } = useAuth();
  const otpRefs = useRef([]);

  // Email Validation Helper
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // 1. Function to call "Send OTP" API
  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email format.");
      return;
    }

    setIsVerifyingEmail(true);

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setIsOtpSent(true);
      toast.success("OTP sent successfully!");
      otpRefs.current[0]?.focus();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsVerifyingEmail(false);
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").trim();

    if (!/^\d{6}$/.test(pasteData)) return;

    const newOtp = pasteData.split("");
    setOtp(newOtp);

    otpRefs.current[5]?.focus();
  };
  // 2. Function to call "Final Login" API
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      toast.error("Please enter 6-digit OTP");
      return;
    }

    setIsLoggingIn(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: finalOtp }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);
      await fetchUser(); // Refresh user context after login
      toast.success("Login successful");

      // 👉 redirect after login

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoggingIn(false);
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
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl w-full max-w-xl">
        <h1 className="text-3xl font-bold text-[#FF6A88] text-center mb-6 tracking-wider">
          Login
        </h1>

        <p className="text-[#4A4A5A] text-center mb-10 font-bold tracking-wide">
          Enter your email and password to login:
        </p>

        <div className="mb-6">
          <label className="block text-sm font-bold text-[#4A4A5A] mb-2">
            E-mail
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={isVerifyingEmail}
              className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-black underline hover:text-gray-700 transition-colors disabled:text-gray-400 text-sm cursor-pointer"
            >
              {isVerifyingEmail ? "Sending..." : "Verify"}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-[#4A4A5A] mb-2">
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
                onPaste={handlePaste}
                className="w-10 h-10 text-center text-lg font-bold bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-start items-center mb-8">
          <a
            href="#"
            className="text-sm text-[#4D6A39] hover:text-[#4D6A39] font-bold"
          >
            Forgot your password?
          </a>
        </div>

        <button
          onClick={handleLoginSubmit}
          disabled={isLoggingIn}
          className="w-full py-3.5 bg-[#FF6A88] text-white font-bold rounded hover:bg-[#ff5e7a] transition-colors shadow-sm text-lg tracking-wide cursor-pointer"
        >
          {isLoggingIn ? "Processing..." : "Login"}
        </button>

        <div className="mt-6 text-center text-sm font-bold text-[#4A4A4A]">
          Don't have an account?{" "}
          <Link
            href="/components/auth/signup"
            className="text-[#4D6A39] hover:text-[#4D6A39]"
          >
            Sign up.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
