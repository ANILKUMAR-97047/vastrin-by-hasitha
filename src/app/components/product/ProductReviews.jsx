// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { FaCamera } from 'react-icons/fa';

// export default function ProductReviews({ product }) {
//     if (!product.reviews || product.reviews.length === 0) return null;

//     const [isWriting, setIsWriting] = useState(false);

//     // Fixed mock values to closely match screenshot
//     const reviewDistribution = [
//         { level: 5, count: 100 },
//         { level: 4, count: 11 },
//         { level: 3, count: 3 },
//         { level: 2, count: 8 },
//         { level: 1, count: 1 }
//     ];
//     const totalReviews = 123;

//     if (isWriting) {
//         return (
//             <div className="w-[95%] max-w-2xl font-inknut space-y-6 mx-auto border border-gray-100 rounded-md p-6 bg-[#FFEDF0]">
//                 {/* Header with Close */}
//                 <div className="flex justify-between items-center mb-6 -mt-10">
//                     <h2 className="text-3xl md:text-4xl font-bold text-[#A68B5B] tracking-wide">
//                         Write a review
//                     </h2>
//                     <button
//                         onClick={() => setIsWriting(false)}
//                         className="text-gray-500 hover:text-gray-800 font-semibold px-4 py-2 border rounded border-gray-300"
//                     >
//                         Cancel
//                     </button>
//                 </div>

//                 {/* Product Snippet */}
//                 <div className="flex items-center gap-4 mb-6">
//                     <div className="relative w-20 h-20 border border-gray-200 bg-white">
//                         <Image
//                             src={product.mainImage || product.image || '/images/home/fresh-drop/image-1.png'}
//                             alt={product.title}
//                             fill
//                             sizes="80px"
//                             className="object-cover"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <h4 className="font-bold text-gray-900 text-sm md:text-base max-w-[400px] leading-tight mb-2">
//                             {product.title}
//                         </h4>
//                         <span className="text-gray-200 text-xl tracking-widest leading-none">★★★★★</span>
//                     </div>
//                 </div>

//                 {/* Form Elements */}
//                 <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsWriting(false); }}>
//                     {/* Name */}
//                     <div className="flex flex-col gap-2">
//                         <label className="text-[#4A4A5A] text-sm">Your name *</label>
//                         <input
//                             type="text"
//                             required
//                             className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-gray-400 shadow-sm bg-white"
//                         />
//                     </div>

//                     {/* Email */}
//                     <div className="flex flex-col gap-2">
//                         <label className="text-[#4A4A5A] text-sm">Your email *</label>
//                         <input
//                             type="email"
//                             required
//                             className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-gray-400 shadow-sm bg-white"
//                         />
//                     </div>

//                     {/* Review area */}
//                     <div className="flex flex-col gap-2">
//                         <label className="text-[#4A4A5A] text-sm">Review *</label>
//                         <textarea
//                             rows="4"
//                             required
//                             placeholder="Let us know what you think"
//                             className="w-full border border-gray-200 rounded-md px-4 py-3 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 shadow-sm resize-none bg-white"
//                         ></textarea>
//                     </div>

//                     {/* Camera */}
//                     <div className="pt-2">
//                         <FaCamera size={24} className="text-gray-400 cursor-pointer hover:text-gray-600 transition" />
//                     </div>

//                     {/* Submit Button */}
//                     <button type="submit" className="w-full bg-[#FF6A88] hover:bg-[#F95F7D] text-white text-lg font-semibold rounded-md py-3.5 transition tracking-wide cursor-pointer">
//                         Submit review
//                     </button>
//                 </form>
//             </div>
//         );
//     }

//     return (
//         <div className="w-[95%] font-inknut space-y-6 mx-auto bg-transparent">
//             {/* Header Row */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <h3 className="text-xl md:text-2xl font-bold text-[#333333] tracking-wide">
//                     Customer Reviews
//                 </h3>
//                 <button
//                     onClick={() => setIsWriting(true)}
//                     className="bg-[#DCA839] hover:bg-[#c49430] text-white px-6 py-2.5 rounded text-sm font-semibold tracking-wide transition shadow-sm w-full sm:w-auto"
//                 >
//                     Write a Review
//                 </button>
//             </div>

//             {/* Main Content Area */}
//             <div className="flex flex-col w-full max-w-[500px]">
//                 {/* Summary Section */}
//                 <div className="flex flex-row items-baseline gap-3 mb-6">
//                     <span className="text-4xl md:text-5xl font-bold text-[#333333] leading-none">
//                         5<span className="text-2xl md:text-4xl lg:text-[32px] font-normal text-gray-500">/5</span>
//                     </span>
//                     <span className="text-[#F5A623] text-lg md:text-xl ml-2 tracking-widest pb-1 md:pb-0">★★★★★</span>
//                     <span className="text-xs text-gray-500 font-semibold pb-1 md:pb-0">{product.reviewCount || 47} reviews</span>
//                 </div>

//                 {/* Distribution Bars */}
//                 <div className="space-y-3 font-semibold text-sm text-[#333333] w-full">
//                     {reviewDistribution.map(bar => {
//                         const percentage = (bar.count / totalReviews) * 100;
//                         return (
//                             <div key={bar.level} className="flex items-center gap-4">
//                                 <span className="w-4 text-left">{bar.level}</span>
//                                 <div className="flex-1 h-[3px] bg-[#D8D8D8] rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-[#F5A623] rounded-full"
//                                         style={{ width: `${percentage}%` }}
//                                     />
//                                 </div>
//                                 <span className="w-8 text-right">{bar.count}</span>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* Reviews List Cards */}
//             <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
//                 {product.reviews.map(review => (
//                     <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
//                         <div className="flex justify-between items-start mb-4">
//                             <div className="flex flex-col space-y-1">
//                                 <h4 className="font-bold text-sm text-[#333333] tracking-wide">{review.name}</h4>
//                                 <span className="text-gray-400 text-xs">{review.date}</span>
//                             </div>
//                             <span className="text-[#F5A623] text-sm tracking-widest leading-none mt-0.5">★★★★★</span>
//                         </div>
//                         <p className="text-xs text-gray-600 font-medium leading-relaxed">
//                             {review.text}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { FaCamera } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function ProductReviews({ product }) {
    if (!product.reviews || product.reviews.length === 0) return null;

    const [isWriting, setIsWriting] = useState(false);
    const [reviewImage, setReviewImage] = useState(null);
    
    // Form Refs
    const nameRef = useRef();
    const emailRef = useRef();
    const textRef = useRef();
    const fileInputRef = useRef();

    // Fixed mock values to closely match screenshot
    const reviewDistribution = [
        { level: 5, count: 100 },
        { level: 4, count: 11 },
        { level: 3, count: 3 },
        { level: 2, count: 8 },
        { level: 1, count: 1 }
    ];
    const totalReviews = 123;

    // --- Handlers ---
    const handleCameraClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setReviewImage(file);
            toast.success(`Image "${file.name}" selected`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const text = textRef.current.value;

        // Individual field validation with Toast
        if (!name.trim()) return toast.error("Please enter your name");
        if (!email.trim()) return toast.error("Please enter your email");
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return toast.error("Please enter a valid email address");
        
        if (!text.trim()) return toast.error("Please write a review message");

        // Logic for backend integration
        console.log("Submitting Review:", { name, email, text, image: reviewImage });
        
        toast.success("Review submitted successfully!");
        setIsWriting(false);
        setReviewImage(null);
    };

    if (isWriting) {
        return (
            <div className="w-[95%] max-w-2xl font-inknut space-y-6 mx-auto border border-gray-100 rounded-md p-6 bg-[#FFEDF0]">
                {/* Header with Close */}
                <div className="flex justify-between items-center mb-6 -mt-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#A68B5B] tracking-wide">
                        Write a review
                    </h2>
                    <button
                        onClick={() => setIsWriting(false)}
                        className="text-gray-500 hover:text-gray-800 font-semibold px-4 py-2 border rounded border-gray-300"
                    >
                        Cancel
                    </button>
                </div>

                {/* Product Snippet */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-20 h-20 border border-gray-200 bg-white">
                        <Image
                            src={product.mainImage || product.image || '/images/home/fresh-drop/image-1.png'}
                            alt={product.title}
                            fill
                            sizes="80px"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold text-gray-900 text-sm md:text-base max-w-[400px] leading-tight mb-2">
                            {product.title}
                        </h4>
                        <span className="text-gray-200 text-xl tracking-widest leading-none">★★★★★</span>
                    </div>
                </div>

                {/* Form Elements */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4A4A5A] text-sm">Your name *</label>
                        <input
                            ref={nameRef}
                            type="text"
                            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-gray-400 shadow-sm bg-white"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4A4A5A] text-sm">Your email *</label>
                        <input
                            ref={emailRef}
                            type="email"
                            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-gray-400 shadow-sm bg-white"
                        />
                    </div>

                    {/* Review area */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#4A4A5A] text-sm">Review *</label>
                        <textarea
                            ref={textRef}
                            rows="4"
                            placeholder="Let us know what you think"
                            className="w-full border border-gray-200 rounded-md px-4 py-3 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 shadow-sm resize-none bg-white"
                        ></textarea>
                    </div>

                    {/* Camera and Hidden File Input */}
                    <div className="pt-2 flex flex-col gap-2">
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            className="hidden" 
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <div className="flex items-center gap-3">
                            <FaCamera 
                                size={24} 
                                className="text-gray-400 cursor-pointer hover:text-gray-600 transition" 
                                onClick={handleCameraClick}
                            />
                            {reviewImage && <span className="text-xs text-green-600 font-bold">{reviewImage.name}</span>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-[#FF6A88] hover:bg-[#F95F7D] text-white text-lg font-semibold rounded-md py-3.5 transition tracking-wide cursor-pointer">
                        Submit review
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="w-[95%] font-inknut space-y-6 mx-auto bg-transparent">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#333333] tracking-wide">
                    Customer Reviews
                </h3>
                <button
                    onClick={() => setIsWriting(true)}
                    className="bg-[#DCA839] hover:bg-[#c49430] text-white px-6 py-2.5 rounded text-sm font-semibold tracking-wide transition shadow-sm w-full sm:w-auto"
                >
                    Write a Review
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col w-full max-w-[500px]">
                {/* Summary Section */}
                <div className="flex flex-row items-baseline gap-3 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-[#333333] leading-none">
                        5<span className="text-2xl md:text-4xl lg:text-[32px] font-normal text-gray-500">/5</span>
                    </span>
                    <span className="text-[#F5A623] text-lg md:text-xl ml-2 tracking-widest pb-1 md:pb-0">★★★★★</span>
                    <span className="text-xs text-gray-500 font-semibold pb-1 md:pb-0">{product.reviewCount || 47} reviews</span>
                </div>

                {/* Distribution Bars */}
                <div className="space-y-3 font-semibold text-sm text-[#333333] w-full">
                    {reviewDistribution.map(bar => {
                        const percentage = (bar.count / totalReviews) * 100;
                        return (
                            <div key={bar.level} className="flex items-center gap-4">
                                <span className="w-4 text-left">{bar.level}</span>
                                <div className="flex-1 h-[3px] bg-[#D8D8D8] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#F5A623] rounded-full"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <span className="w-8 text-right">{bar.count}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Reviews List Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                {product.reviews.map(review => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex flex-col space-y-1">
                                <h4 className="font-bold text-sm text-[#333333] tracking-wide">{review.name}</h4>
                                <span className="text-gray-400 text-xs">{review.date}</span>
                            </div>
                            <span className="text-[#F5A623] text-sm tracking-widest leading-none mt-0.5">★★★★★</span>
                        </div>
                        <p className="text-xs text-gray-600 font-medium leading-relaxed">
                            {review.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
