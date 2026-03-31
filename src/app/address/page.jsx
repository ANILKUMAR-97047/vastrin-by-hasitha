'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const AddAddress = () => {
    const [addressType, setAddressType] = useState('Home');

    return (
        <div className="bg-white min-h-screen py-8 px-6 md:px-12 lg:px-24 font-serif text-[#333]">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-4 mb-10">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft size={20} className="text-gray-700" />
                    </button>
                    <h1 className="text-2xl font-bold text-[#1A1A1A]">Add New Address</h1>
                </div>

                <form className="space-y-10">

                    {/* Section: Personal Details */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-700 mb-6">Personal Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-300 text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Mobile Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-300 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section: Address Details */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-700 mb-6">Address Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2 md:col-span-1">
                                <label className="block text-sm font-medium text-gray-500">Address (House No, Building, Street)</label>
                                <input
                                    type="text"
                                    placeholder="Enter your address"
                                    className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-300 text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Locality / Area</label>
                                <input
                                    type="text"
                                    placeholder="Enter your locality or area"
                                    className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-300 text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Landmark (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="Nearby landmark"
                                    className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-300 text-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">Pincode</label>
                                <input
                                    type="text"
                                    placeholder="6-digit pincode"
                                    className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-300 text-sm"
                                />
                            </div>
                        </div>

                        {/* Bottom Row: State, District, City */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">State</label>
                                <input type="text" defaultValue="Karnataka" className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white text-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">District</label>
                                <input type="text" defaultValue="Bengaluru" className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white text-sm" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-500">City</label>
                                <input type="text" defaultValue="Bengaluru" className="w-full px-4 py-3 border border-gray-100 rounded-lg bg-white text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Section: Address Type */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-700 mb-4">Address Type</h2>
                        <p className="text-xs font-medium text-gray-400 mb-4 tracking-wide">Address Type</p>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setAddressType('Home')}
                                className={`flex items-center gap-3 px-8 py-3 rounded-lg border transition-all text-sm font-bold ${addressType === 'Home'
                                        ? 'bg-[#EBF1FF] border-[#4A85FF] text-[#4A85FF]'
                                        : 'bg-white border-gray-100 text-gray-600'
                                    }`}
                            >
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${addressType === 'Home' ? 'border-[#4A85FF]' : 'border-gray-200'}`}>
                                    {addressType === 'Home' && <div className="w-2 h-2 rounded-full bg-[#4A85FF]" />}
                                </div>
                                Home
                            </button>

                            <button
                                type="button"
                                onClick={() => setAddressType('Office')}
                                className={`flex items-center gap-3 px-8 py-3 rounded-lg border transition-all text-sm font-bold ${addressType === 'Office'
                                        ? 'bg-[#EBF1FF] border-[#4A85FF] text-[#4A85FF]'
                                        : 'bg-white border-gray-100 text-gray-600'
                                    }`}
                            >
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${addressType === 'Office' ? 'border-[#4A85FF]' : 'border-gray-200'}`}>
                                    {addressType === 'Office' && <div className="w-2 h-2 rounded-full bg-[#4A85FF]" />}
                                </div>
                                Office
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-8 flex justify-center">
                        <button className="w-full md:w-auto px-16 py-4 bg-[#FF758C] text-white font-bold rounded-lg hover:bg-[#ff5e7a] transition-all shadow-md italic">
                            Save Address & Continue
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddAddress;