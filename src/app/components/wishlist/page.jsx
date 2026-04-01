'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/app/context/WishlistContext';
import ProductCard from '../shared/ProductCard';
import { GoArrowLeft } from 'react-icons/go';

export default function WishlistPage() {
    const { wishlist, clearWishlist } = useWishlist();

    if (wishlist.length === 0) {
        return (
            <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-rose-50 font-inknut">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Your Wishlist is Empty</h1>
                    <p className="text-lg text-gray-600">Start adding your favorite items to your wishlist!</p>
                    <Link 
                        href="/"
                        className="inline-flex items-center gap-2 bg-[#FC6C85] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E85A71] transition-colors"
                    >
                        <GoArrowLeft size={20} />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-rose-50 py-8 md:py-12 font-inknut">
            <div className="w-[90%] mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 md:mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            My Wishlist
                        </h1>
                        <span className="text-lg text-gray-600">
                            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
                        </span>
                    </div>
                    
                    {wishlist.length > 0 && (
                        <button 
                            onClick={clearWishlist}
                            className="text-sm md:text-base text-[#FC6C85] hover:text-[#E85A71] font-semibold transition-colors underline"
                        >
                            Clear Wishlist
                        </button>
                    )}
                </div>

                {/* Wishlist Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {wishlist.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Footer Actions */}
                <div className="flex justify-center">
                    <Link 
                        href="/"
                        className="inline-flex items-center gap-2 bg-[#DBA622] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C9951F] transition-colors"
                    >
                        <GoArrowLeft size={20} />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
