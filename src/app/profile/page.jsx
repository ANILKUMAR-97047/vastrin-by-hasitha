'use client';

import React, { useState, useRef } from 'react';
import { ChevronRight, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProfileSettings = () => {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);
    const router = useRouter();

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-white min-h-screen py-12 px-6 md:px-12 lg:px-24 font-serif text-[#333]">
            <div className="max-w-4xl mx-auto">

                {/* Photo Upload Section */}
                <div className="flex flex-col items-center mb-12">
                    <div className="relative group cursor-pointer" onClick={handleImageClick}>
                        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <img src="/images/logos/profile.png" alt="Default Avatar" className="w-full h-full object-cover" />
                            )}
                        </div>
                        <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="text-white" size={24} />
                        </div>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button
                        onClick={handleImageClick}
                        className="mt-3 text-sm font-bold text-[#1A1A1A] hover:text-gray-600 transition-colors"
                    >
                        + Upload Photo here*
                    </button>
                </div>

                {/* Form Grid */}
                <form className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8">

                        {/* Full Name */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-[#1A1A1A]">Full Name*</label>
                            <input
                                type="text"
                                placeholder="Enter"
                                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
                            />
                        </div>

                        {/* Email Id */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-[#1A1A1A]">Email Id*</label>
                            <input
                                type="email"
                                placeholder="Enter"
                                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-[#1A1A1A]">Phone Number*</label>
                            <input
                                type="tel"
                                placeholder="Enter"
                                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
                            />
                        </div>

                        {/* Alternate Phone Number */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-[#1A1A1A]">Alternate Phone Number*</label>
                            <input
                                type="tel"
                                placeholder="Enter"
                                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
                            />
                        </div>

                        {/* Gender */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-[#1A1A1A]">Gender*</label>
                            <input
                                type="text"
                                placeholder="Enter"
                                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-[#1A1A1A]">Date of Birth*</label>
                            <input
                                type="text"
                                placeholder="Enter"
                                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
                            />
                        </div>

                        {/* Address (Span full width on mobile, half on desktop to match screenshot) */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-[#1A1A1A]">Address*</label>
                            <input
                                type="text"
                                placeholder="Enter"
                                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="pt-10 flex justify-center">
                        <button className="w-full md:w-80 py-4 bg-[#FF758C] text-white font-bold rounded-lg hover:bg-[#ff5e7a] transition-all shadow-md shadow-pink-100">
                            Save
                        </button>
                    </div>
                </form>

                {/* My Orders Footer Link */}
                <div className="mt-16 md:mt-24">
                    <button onClick={() => router.push("/components/my-orders")} className="flex items-center gap-1 font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity cursor-pointer">
                        My Orders <ChevronRight size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProfileSettings;