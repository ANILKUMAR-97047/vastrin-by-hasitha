import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Optional: for the icons

const ContactUs = () => {
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
                            and modern luxury. Each piece is thoughtfully designed to embody timeless elegance, with a
                            focus on sophisticated silhouettes and exceptional quality. We believe in creating fashion
                            that transcends trends.
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <div className="relative rounded-lg overflow-hidden">
                            {/* Replace with your actual image path */}
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
                        <p className="text-gray-600">
                            We would love to hear from you. Whether you have a question about our collections,
                            need styling advice, or wish to schedule a private appointment, our team is here to assist you.
                        </p>

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
                        <form className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-[#FDE2E4]">
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF758C]/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF758C]/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF758C]/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF758C]/20"></textarea>
                                </div>
                                <button className="w-full py-4 bg-[#FF758C] text-white font-bold rounded-lg hover:bg-[#ff5e7a] transition-colors shadow-md">
                                    Send Message
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