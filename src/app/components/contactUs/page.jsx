'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactUs = () => {
    // 1. State for form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // 2. Handle Input Changes (Types removed for JSX)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 3. Form Validation and Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Individual field validations
        if (!formData.fullName.trim()) return toast.error("Please enter your full name");
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) return toast.error("Email address is required");
        if (!emailRegex.test(formData.email)) return toast.error("Please enter a valid email address");

        if (!formData.phoneNumber.trim()) return toast.error("Phone number is required");
        if (!formData.message.trim()) return toast.error("Please enter your message");

        // Prepare for Backend
        setIsSubmitting(true);
        const loadingToast = toast.loading("Sending your message...");

        try {
            // INTEGRATION POINT: Replace with your actual API call
            console.log("Submitting to backend:", formData);

            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            toast.success("Message sent! We'll get back to you soon.", { id: loadingToast });
            
            // Reset form after success
            setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
        } catch (error) {
            toast.error("Failed to send message. Please try again later.", { id: loadingToast });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#FFF0F3] min-h-screen py-12 px-6 md:px-12 lg:px-24 font-serif">
            <div className="max-w-7xl mx-auto font-inika">

                {/* Top Section: About Us & Image */}
                <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">About Us</p>
                        <h1 className="text-5xl md:text-6xl lg:text-[56px] font-bold text-[#FF758C] font-inknut">
                            Vastrin by Hasitha
                        </h1>
                        <h2 className="text-xl text-[#D4AF37] font-inika">
                            Timeless fashion crafted with elegance and intention
                        </h2>
                        <p className="text-gray-700 leading-relaxed max-w-lg font-inika">
                            Vastrin by Hasitha is a premium fashion label that celebrates the art of refined craftsmanship
                            and modern luxury. Each piece is thoughtfully designed to embody timeless elegance.
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src="/images/contactus/image-1.png"
                                alt="Fashion Model"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Form & Get In Touch */}
                <div className="flex flex-col md:flex-row-reverse gap-16 items-start">

                    {/* Contact Details */}
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-4xl font-bold text-[#FF758C] font-inknut">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-gray-600">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-gray-400 font-bold">Email</p>
                                    <p className="font-semibold text-gray-800">hello@vastrinbyhasitha.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-gray-600">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-gray-400 font-bold">Phone</p>
                                    <p className="font-semibold text-gray-800">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-gray-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase text-gray-400 font-bold">Studio Address</p>
                                    <p className="font-semibold text-gray-800">Available by Appointment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-1/2 w-full">
                        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-[#FDE2E4]">
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF758C]/20" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF758C]/20" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF758C]/20" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Message</label>
                                    <textarea 
                                        rows={4} 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF758C]/20"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-[#FF758C] text-white font-bold rounded-lg hover:bg-[#ff5e7a] transition-colors shadow-md cursor-pointer disabled:bg-gray-300"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;