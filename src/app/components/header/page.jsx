"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { wishlist } = useWishlist();
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Kurti Sets", href: "/collections/kurti-sets" },
        { name: "Co-ord sets", href: "/collections/coord-sets" },
        { name: "Best Sellers", href: "/collections/best-sellers" },
        { name: "Special Category", href: "/collections/special-category" },
        { name: "Accessories", href: "/collections/accessories" },
    ];

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50 relative">
            <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="shrink-0 flex items-center cursor-pointer">
                        <img
                            className="w-16 h-16 object-contain"
                            src='/images/logos/vastrinheader.svg'
                            alt="Vastrin Logo"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-6 xl:space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`font-inknut text-[17px] tracking-[-0.6px] transition-colors ${isActive
                                        ? "text-[#FC6C85] font-semibold underline decoration-solid [text-underline-position:from-font]"
                                        : "text-[#DBA622] font-normal hover:text-[#FC6C85]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Icons (Desktop & Tablet) */}
                    <div className="hidden md:flex items-center space-x-5 lg:space-x-6">


                        {/* Tote/Bag Placeholder Icon */}
                        <div className='flex gap-3'>
                            <Link href="/profile"><img
                                className="w-[24px] h-[24px] object-fill rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                src="/images/logos/profile.png"
                                alt="User Profile"
                            />
                            </Link>
                            <IoSearchOutline className='text-[#DBA622]' size={24} />
                            <Link href="/wishlist" className="relative hover:opacity-80 transition-opacity">
                                <GoHeart className='text-[#DBA622]' size={24} />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#FC6C85] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </Link>
                            <Link href="/components/cart" className="relative hover:opacity-80 transition-opacity">
                                <PiHandbagSimpleLight className='text-[#DBA622]' size={24} />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#FC6C85] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <Link href="/components/auth/login"><p className='text-[#DBA622] ml-4 lg:text-[16px] font-semibold cursor-pointer'>Login</p></Link>
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
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 top-20 bg-black/20 lg:hidden z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="fixed inset-x-0 top-20 bg-white border-t border-gray-100 shadow-lg lg:hidden z-50 max-h-96 overflow-y-auto">
                    <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2.5 rounded-md font-['Inknut_Antiqua'] text-[17px] tracking-[-0.6px] ${isActive
                                        ? "text-[#FC6C85] font-semibold underline decoration-solid [text-underline-position:from-font] bg-gray-50"
                                        : "text-[#DBA622] font-normal hover:bg-gray-50 hover:text-[#FC6C85]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Render icons inside mobile menu ONLY for small mobile devices (since we show them on tablet header) */}
                    <div className='flex gap-3 ml-7 mb-5' >
                        <Link href="/profile">
                            <img
                                className="w-[24px] h-[24px] object-fill rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                src="/images/logos/profile.png"
                                alt="User Profile"
                            />
                        </Link>
                        <IoSearchOutline className='text-[#DBA622]' size={24} />
                        <Link href="/wishlist" className="relative hover:opacity-80 transition-opacity">
                            <GoHeart className='text-[#DBA622]' size={24} />
                            {wishlist.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#FC6C85] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>
                        <Link href="/components/cart" className="relative hover:opacity-80 transition-opacity">
                            <PiHandbagSimpleLight className='text-[#DBA622]' size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#FC6C85] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    </div>
                </>
            )}
        </header>
    );
}