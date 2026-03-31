// 'use client';

// import Link from 'next/link';
// import React, { useState, useRef } from 'react';
// import toast from 'react-hot-toast';

// // Make sure to add the background image to your /public/images folder
// // or update the path in the style attribute below.
// const LOGIN_BG_URL = '/images/auth/loginbg.png';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [otp, setOtp] = useState(['', '', '', '', '', '']);
//     const [isOtpSent, setIsOtpSent] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     // Refs to automatically focus the next OTP input box
//     const otpRefs = useRef([]);

//     // --- Backend API Integration Functions ---

//     // 1. Function to call your "Send OTP" API
//     const handleSendOtp = async () => {
//         if (!email) {
//             toast.error("Please enter a valid email address.");
//             return;
//         }

//         setIsLoading(true);
//         try {
//             // --> INTEGRATE YOUR 'SEND OTP' API CALL HERE <--
//             // Example: await axios.post('/api/send-otp', { email });
//             console.log('Sending OTP to:', email);

//             // Simulate success
//             setTimeout(() => {
//                 setIsOtpSent(true);
//                 setIsLoading(false);
//                 // Focus the first OTP box after a short delay
//                 otpRefs.current[0]?.focus();
//             }, 1500);

//         } catch (error) {
//             console.error('Error sending OTP:', error);
//             setIsLoading(false);
//             alert('Failed to send OTP. Please try again.');
//         }
//     };

//     // 2. Function to call your "Final Login" API
//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         const finalOtp = otp.join('');

//         if (finalOtp.length !== 6) {
//             toast.error("Please enter the full 6-digit OTP.");
//             return;
//         }

//         setIsLoading(true);
//         try {
//             // --> INTEGRATE YOUR 'LOGIN/VERIFY' API CALL HERE <--
//             // Example: await axios.post('/api/verify-login', { email, otp: finalOtp });
//             console.log('Logging in with Email:', email, 'and OTP:', finalOtp);

//             // Simulate success and redirect
//             setTimeout(() => {
//                 setIsLoading(false);
//                 // Example: router.push('/dashboard');
//                 alert('Login Successful!');
//             }, 2000);

//         } catch (error) {
//             console.error('Login error:', error);
//             setIsLoading(false);
//             alert('Invalid OTP. Please try again.');
//         }
//     };

//     // --- Input Change Handlers ---

//     const handleOtpChange = (element, index) => {
//         if (isNaN(element.value)) return false; // Only allow numbers

//         const newOtp = [...otp];
//         newOtp[index] = element.value;
//         setOtp(newOtp);

//         // Focus next input box automatically
//         if (element.value !== '' && index < 5) {
//             otpRefs.current[index + 1].focus();
//         }
//     };

//     const handleKeyDown = (e, index) => {
//         // Handle backspace to focus previous box
//         if (e.key === 'Backspace' && !otp[index] && index > 0) {
//             otpRefs.current[index - 1].focus();
//         }
//     };

//     return (
//         <div
//             className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center font-inknut"
//             style={{ backgroundImage: `url(${LOGIN_BG_URL})` }}
//         >
//             {/* Login Card */}
//             <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl w-full max-w-xl transition-all duration-300">

//                 {/* Title */}
//                 <h1 className="text-3xl font-bold text-[#FF6A88] text-center mb-6 tracking-wider">
//                     Login
//                 </h1>

//                 {/* Subtitle */}
//                 <p className="text-[#4A4A5A] text-center mb-10 font-bold tracking-wide">
//                     Enter your email and password to login:
//                 </p>

//                 {/* Email Input Field */}
//                 <div className="mb-6">
//                     <label className="block text-sm font-bold text-[#4A4A5A] mb-2">E-mail</label>
//                     <div className="relative">
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="E-mail"
//                             className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-400"
//                         />
//                         {/* Verify/Send OTP Button */}
//                         <button
//                             type="button"
//                             onClick={handleSendOtp}
//                             disabled={isLoading}
//                             className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-black underline hover:text-gray-700 transition-colors disabled:text-gray-400 text-sm cursor-pointer"
//                         >
//                             {isLoading ? 'Sending...' : 'Verify'}
//                         </button>
//                     </div>
//                 </div>

//                 {/* OTP Input Section (Always shown to match screenshot layout) */}
//                 <div className="mb-6">
//                     <label className="block text-sm font-bold text-[#4A4A5A] mb-2">Otp</label>
//                     <div className="flex gap-2 justify-start">
//                         {otp.map((digit, index) => (
//                             <input
//                                 key={index}
//                                 type="text"
//                                 maxLength="1"
//                                 value={digit}
//                                 ref={(el) => (otpRefs.current[index] = el)}
//                                 onChange={(e) => handleOtpChange(e.target, index)}
//                                 onKeyDown={(e) => handleKeyDown(e, index)}
//                                 className="w-10 h-10 text-center text-lg font-bold bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400"
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Action Links */}
//                 <div className="flex justify-start items-center mb-8">
//                     <a href="#" className="text-sm text-[#4D6A39] hover:text-[#4D6A39] font-bold">
//                         Forgot your password?
//                     </a>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     onClick={handleLoginSubmit}
//                     disabled={isLoading}
//                     className="w-full py-3.5 bg-[#FF6A88] text-white font-bold rounded hover:bg-[#ff5e7a] transition-colors shadow-sm text-lg tracking-wide cursor-pointer"
//                 >
//                     {isLoading ? 'Processing...' : 'Login'}
//                 </button>

//                 {/* Sign Up Link */}
//                 <div className="mt-6 text-center text-sm font-bold text-[#4A4A4A]">
//                     Don't have an account?{' '}
//                     <Link href="/components/auth/signup" className="text-[#4D6A39] hover:text-[#4D6A39]">
//                         Sign up.
//                     </Link>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Login;



'use client';

import Link from 'next/link';
import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

const LOGIN_BG_URL = '/images/auth/loginbg.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isOtpSent, setIsOtpSent] = useState(false);
    // Separated loading states
    const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

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
            toast.error("Please enter a valid email address (e.g., name@example.com).");
            return;
        }

        setIsVerifyingEmail(true); // Only this button shows loading now
        try {
            console.log('Sending OTP to:', email);

            // Simulate API Call
            setTimeout(() => {
                setIsOtpSent(true);
                setIsVerifyingEmail(false);
                toast.success("OTP sent successfully!");
                otpRefs.current[0]?.focus();
            }, 1500);

        } catch (error) {
            console.error('Error sending OTP:', error);
            setIsVerifyingEmail(false);
            toast.error('Failed to send OTP. Please try again.');
        }
    };

    // 2. Function to call "Final Login" API
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const finalOtp = otp.join('');

        if (finalOtp.length !== 6) {
            toast.error("Please enter the full 6-digit OTP.");
            return;
        }

        setIsLoggingIn(true); // Login button shows processing here
        try {
            console.log('Logging in with Email:', email, 'and OTP:', finalOtp);

            // Simulate API Call
            setTimeout(() => {
                setIsLoggingIn(false);
                toast.success('Login Successful!');
            }, 2000);

        } catch (error) {
            console.error('Login error:', error);
            setIsLoggingIn(false);
            toast.error('Invalid OTP. Please try again.');
        }
    };

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value !== '' && index < 5) {
            otpRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
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
                    <label className="block text-sm font-bold text-[#4A4A5A] mb-2">E-mail</label>
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
                            {isVerifyingEmail ? 'Sending...' : 'Verify'}
                        </button>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-bold text-[#4A4A5A] mb-2">Otp</label>
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
                                className="w-10 h-10 text-center text-lg font-bold bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-start items-center mb-8">
                    <a href="#" className="text-sm text-[#4D6A39] hover:text-[#4D6A39] font-bold">
                        Forgot your password?
                    </a>
                </div>

                <button
                    onClick={handleLoginSubmit}
                    disabled={isLoggingIn}
                    className="w-full py-3.5 bg-[#FF6A88] text-white font-bold rounded hover:bg-[#ff5e7a] transition-colors shadow-sm text-lg tracking-wide cursor-pointer"
                >
                    {isLoggingIn ? 'Processing...' : 'Login'}
                </button>

                <div className="mt-6 text-center text-sm font-bold text-[#4A4A4A]">
                    Don't have an account?{' '}
                    <Link href="/components/auth/signup" className="text-[#4D6A39] hover:text-[#4D6A39]">
                        Sign up.
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;