"use client";

import React, { useState } from 'react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", active: true },
        { name: "Kurti Sets", active: false },
        { name: "Co-ord sets", active: false },
        { name: "Best Sellers", active: false },
        { name: "Special Category", active: false },
        { name: "Accessories", active: false },
    ];

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="shrink-0 flex items-center cursor-pointer">
                        <img
                            className="w-32 h-16 object-contain"
                            src='/images/logos/vastrinheader.svg'
                            alt="Vastrin Logo"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-6 xl:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href="#"
                                className={`font-inknut text-[17px] tracking-[-0.6px] transition-colors ${link.active
                                    ? "text-[#FC6C85] font-semibold underline decoration-solid [text-underline-position:from-font]"
                                    : "text-[#DBA622] font-normal hover:text-[#FC6C85]"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right Icons (Desktop & Tablet) */}
                    <div className="hidden md:flex items-center space-x-5 lg:space-x-6">
                        <img
                            className="w-6 h-6 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                            src="https://placehold.co/24x24"
                            alt="User Profile"
                        />

                        {/* Tote/Bag Placeholder Icon */}
                        <div className="w-6 h-6 relative overflow-hidden cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity">
                            <div className="w-5 h-4 absolute outline outline-2 outline-offset-[-1px] outline-yellow-500 rounded-[2px]" />
                        </div>

                        {/* App/Menu Outline Placeholder Icon */}
                        <div className="w-5 h-5 flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="w-5 h-5 bg-yellow-500 rounded-[2px]" />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex justify-center items-center lg:hidden">
                        {/* On tablet we still show icons, so let's separate hamburger slightly */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-rose-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400 ml-4 md:ml-0"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Toggle */}
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile & Tablet Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-md absolute w-full left-0 z-40">
                    <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href="#"
                                className={`block px-3 py-2.5 rounded-md font-['Inknut_Antiqua'] text-[17px] tracking-[-0.6px] ${link.active
                                    ? "text-[#FC6C85] font-semibold underline decoration-solid [text-underline-position:from-font] bg-gray-50"
                                    : "text-[#DBA622] font-normal hover:bg-gray-50 hover:text-[#FC6C85]"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Render icons inside mobile menu ONLY for small mobile devices (since we show them on tablet header) */}
                    <div className="pt-4 pb-4 border-t border-gray-200 md:hidden">
                        <div className="flex items-center justify-around px-5">
                            <img className="w-8 h-8 rounded-full cursor-pointer" src="https://placehold.co/24x24" alt="User Profile" />
                            <div className="w-7 h-7 relative overflow-hidden cursor-pointer flex items-center justify-center">
                                <div className="w-6 h-5 absolute outline-2 outline-yellow-500 rounded-[2px]" />
                            </div>
                            <div className="w-6 h-6 flex justify-center items-center cursor-pointer">
                                <div className="w-6 h-6 bg-yellow-500 rounded-[2px]" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}