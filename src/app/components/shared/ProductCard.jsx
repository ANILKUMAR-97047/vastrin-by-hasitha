import React from 'react';
import Image from 'next/image';
import { GoHeart } from "react-icons/go";

export default function ProductCard({ product }) {
    return (
        <div className="group flex flex-col font-inknut relative">
            {/* Image Container */}
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-md bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover bg-[#f8e5e5]" // adding a slight pinkish placeholder bg fallback
                />

                {/* Save Badges */}
                {product.discount && (
                    <div className="absolute top-3 left-3 bg-[#FC6C85] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm z-10">
                        {product.discount}
                    </div>
                )}

                {/* Wishlist Icon */}
                <button className="absolute top-3 right-3 p-1.5 z-10 bg-transparent cursor-pointer hover:scale-110 transition-transform">
                    <GoHeart size={22} className="text-gray-800 font-bold drop-shadow-sm" style={{ strokeWidth: 1 }} />
                </button>
            </div>

            {/* Product Info */}
            <div className="mt-4 text-center space-y-1.5 px-1">
                <h3 className="text-[10px] md:text-xs font-medium text-gray-800 leading-tight tracking-wide uppercase font-inknut">
                    {product.title}
                </h3>
                <div className="flex items-center justify-center gap-2 font-inria">
                    <span className="text-[#FC6C85] font-bold text-sm md:text-base uppercase tracking-wide">
                        RS {product.price}
                    </span>
                    <span className="text-[rgba(77,106,57,0.67)] line-through text-[11px] md:text-xs">
                        RS {product.originalPrice}
                    </span>
                </div>
            </div>
        </div>
    );
}
