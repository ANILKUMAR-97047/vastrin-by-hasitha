"use client";

import React, { useState, useRef } from "react";
import { ChevronRight, Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const ProfileSettings = () => {
  // State for all form fields to match backend expectations
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    gender: "",
    dob: "",
    address: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();
const { setUser } = useAuth();
  // Handel Logout function
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Logout failed");
      }
      setUser(null); // Clear user context on logout
      // optional toast
      toast.success("Logged out successfully");

      // 🔥 redirect to home
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Individual field validation with Toast messages
    if (!formData.fullName.trim()) return toast.error("Full Name is required");
    if (!formData.email.trim()) return toast.error("Email Id is required");

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      return toast.error("Please enter a valid Email Id");

    if (!formData.phoneNumber.trim())
      return toast.error("Phone Number is required");
    if (!formData.alternatePhoneNumber.trim())
      return toast.error("Alternate Phone Number is required");
    if (!formData.gender.trim()) return toast.error("Gender is required");
    if (!formData.dob.trim()) return toast.error("Date of Birth is required");
    if (!formData.address.trim()) return toast.error("Address is required");

    try {
      // Logic to match backend integration
      console.log("Submitting Profile Data:", { ...formData, profileImage });

      const loadingToast = toast.loading("Updating profile...");

      // Simulate API Call
      setTimeout(() => {
        toast.success("Profile updated successfully!", { id: loadingToast });
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-12 lg:px-24 font-inknut text-[#333]">
      <div className="max-w-4xl mx-auto">
        {/* Photo Upload Section */}
        <div className="flex flex-col items-center mb-12">
          <div
            className="relative group cursor-pointer"
            onClick={handleImageClick}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="/images/logos/profile.png"
                  alt="Default Avatar"
                  className="w-full h-full object-cover"
                />
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
            type="button"
            onClick={handleImageClick}
            className="mt-3 text-sm font-bold text-[#1A1A1A] hover:text-gray-600 transition-colors cursor-pointer"
          >
            + Upload Photo here*
          </button>
          
        </div>
        

        {/* Form Grid */}
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#1A1A1A]">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
              />
            </div>

            {/* Email Id */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#1A1A1A]">
                Email Id*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#1A1A1A]">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
              />
            </div>

            {/* Alternate Phone Number */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#1A1A1A]">
                Alternate Phone Number*
              </label>
              <input
                type="tel"
                name="alternatePhoneNumber"
                value={formData.alternatePhoneNumber}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#1A1A1A]">
                Gender*
              </label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Enter your gender"
                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#1A1A1A]">
                Date of Birth*
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Enter"
                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#1A1A1A]">
                Address*
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full px-4 py-3 bg-[#F4F7F9] border-none rounded-lg focus:ring-1 focus:ring-gray-300 transition-all text-[#7A8C99] placeholder:text-[#7A8C99]/50"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-10 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-80 py-3 bg-[#FF758C] text-white font-bold rounded-xs hover:bg-[#ff5e7a] transition-all shadow-md shadow-pink-100 cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>

        {/* My Orders Footer Link */}
        <div className="mt-16 md:mt-24 flex space-between gap-12">
          <button
            onClick={() => router.push("/components/my-orders")}
            className="flex items-center gap-1 font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity cursor-pointer"
          >
            My Orders <ChevronRight size={18} />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
