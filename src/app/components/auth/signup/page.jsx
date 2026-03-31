// 'use client';

// import React, { useState, useRef } from 'react';
// import Link from 'next/link';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const LOGIN_BG_URL = '/images/auth/loginbg.png';

// const Signup = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [otp, setOtp] = useState(['', '', '', '', '', '']);
//     const [isLoading, setIsLoading] = useState(false);

//     const otpRefs = useRef([]);

//     const handleSendOtp = async () => {
//         if (!email) return;
//         setIsLoading(true);
//         setTimeout(() => {
//             setIsLoading(false);
//             otpRefs.current[0]?.focus();
//         }, 1500);
//     };

//     const handleSignupSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setTimeout(() => {
//             setIsLoading(false);
//             alert('Signup Successful!');
//         }, 2000);
//     };

//     const handleOtpChange = (element, index) => {
//         if (isNaN(element.value)) return false;
//         const newOtp = [...otp];
//         newOtp[index] = element.value;
//         setOtp(newOtp);
//         if (element.value !== '' && index < 5) {
//             otpRefs.current[index + 1].focus();
//         }
//     };

//     const handleKeyDown = (e, index) => {
//         if (e.key === 'Backspace' && !otp[index] && index > 0) {
//             otpRefs.current[index - 1].focus();
//         }
//     };

//     return (
//         <div
//             className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center font-inknut"
//             style={{ backgroundImage: `url(${LOGIN_BG_URL})` }}
//         >
//             <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-xl transition-all duration-300">

//                 <h1 className="text-2xl md:text-3xl font-bold text-[#FF6A88] text-center mb-3 tracking-wider">
//                     Sign up
//                 </h1>

//                 <p className="text-[#4A4A5A] text-center mb-6 font-bold tracking-wide text-sm md:text-base">
//                     Please fill in the information below:
//                 </p>

//                 {/* First Name */}
//                 <div className="mb-2.5">
//                     <label className="block text-sm font-bold text-[#4A4A5A] mb-1">First name</label>
//                     <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                         placeholder="First name"
//                         className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300"
//                     />
//                 </div>

//                 {/* Last Name */}
//                 <div className="mb-2.5">
//                     <label className="block text-sm font-bold text-[#4A4A5A] mb-1">Last name</label>
//                     <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                         placeholder="Last name"
//                         className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300"
//                     />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-2.5">
//                     <label className="block text-sm font-bold text-[#4A4A5A] mb-1">E-mail</label>
//                     <div className="relative">
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="E-mail"
//                             className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300"
//                         />
//                         <button
//                             type="button"
//                             onClick={handleSendOtp}
//                             disabled={isLoading}
//                             className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-black underline hover:text-gray-700 transition-colors disabled:text-gray-400 text-sm"
//                         >
//                             {isLoading ? 'Sending...' : 'Verify'}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Password */}
//                 <div className="mb-2.5">
//                     <label className="block text-sm font-bold text-[#4A4A5A] mb-1">Password</label>
//                     <div className="relative">
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Password"
//                             className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300 pr-10"
//                         />
//                         <button
//                             type="button"
//                             onClick={() => setShowPassword(!showPassword)}
//                             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
//                         >
//                             {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Confirm Password */}
//                 <div className="mb-2.5">
//                     <label className="block text-sm font-bold text-[#4A4A5A] mb-1">Confirm password</label>
//                     <div className="relative">
//                         <input
//                             type={showConfirmPassword ? "text" : "password"}
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             placeholder="Confirm password"
//                             className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300 pr-10"
//                         />
//                         <button
//                             type="button"
//                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
//                         >
//                             {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* OTP Section */}
//                 <div className="mb-4 mt-4">
//                     <label className="block text-sm font-bold text-[#4A4A5A] mb-1">Otp</label>
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
//                                 className="w-9 h-9 md:w-10 md:h-10 text-center text-lg font-bold bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400"
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 <button
//                     onClick={handleSignupSubmit}
//                     disabled={isLoading}
//                     className="w-full py-2.5 bg-[#FF6A88] text-white font-bold rounded hover:bg-[#ff5e7a] transition-colors shadow-sm text-base md:text-lg tracking-wide"
//                 >
//                     {isLoading ? 'Processing...' : 'Create account'}
//                 </button>

//                 <div className="mt-4 text-center text-sm font-bold text-[#4A4A4A]">
//                     Already have an account?{' '}
//                     <Link href="/components/auth/login" className="text-[#4D6A39] hover:text-[#4a5937]">
//                         Login
//                     </Link>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Signup;


'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const LOGIN_BG_URL = '/images/auth/loginbg.png';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    // Independent loading states
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const otpRefs = useRef([]);

    // Validation Helpers
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

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
        // Simulate API call
        setTimeout(() => {
            setIsVerifying(false);
            toast.success("Verification code sent to your email!");
            otpRefs.current[0]?.focus();
        }, 1500);
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        // 1. Check if all fields are filled
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast.error("All fields are required.");
            return;
        }

        // 2. Validate Email
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email.");
            return;
        }

        // 3. Check if passwords match
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        // 4. Check if OTP is complete
        if (otp.join('').length !== 6) {
            toast.error("Please enter the 6-digit verification code.");
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success('Signup Successful!');
        }, 2000);
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
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-xl transition-all duration-300">
                <h1 className="text-2xl md:text-3xl font-bold text-[#FF6A88] text-center mb-3 tracking-wider">
                    Sign up
                </h1>

                <p className="text-[#4A4A5A] text-center mb-6 font-bold tracking-wide text-sm md:text-base">
                    Please fill in the information below:
                </p>

                <div className="mb-2.5">
                    <label className="block text-sm font-bold text-[#4A4A5A] mb-1">First name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300"
                    />
                </div>

                <div className="mb-2.5">
                    <label className="block text-sm font-bold text-[#4A4A5A] mb-1">Last name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300"
                    />
                </div>

                <div className="mb-2.5">
                    <label className="block text-sm font-bold text-[#4A4A5A] mb-1">E-mail</label>
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
                            {isVerifying ? 'Sending...' : 'Verify'}
                        </button>
                    </div>
                </div>

                <div className="mb-2.5">
                    <label className="block text-sm font-bold text-[#4A4A5A] mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="mb-2.5">
                    <label className="block text-sm font-bold text-[#4A4A5A] mb-1">Confirm password</label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm password"
                            className="w-full px-4 py-2 bg-white border border-gray-200 rounded focus:outline-none focus:border-gray-400 font-normal placeholder:text-gray-300 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                            {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="mb-4 mt-4">
                    <label className="block text-sm font-bold text-[#4A4A5A] mb-1">Otp</label>
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
                    {isSubmitting ? 'Processing...' : 'Create account'}
                </button>

                <div className="mt-4 text-center text-sm font-bold text-[#4A4A4A]">
                    Already have an account?{' '}
                    <Link href="/components/auth/login" className="text-[#4D6A39] hover:text-[#4a5937]">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
