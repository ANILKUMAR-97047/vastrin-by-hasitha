"use client";

import React from "react";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import Link from "next/link";
import { useWishlist } from "@/app/context/WishlistContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    toggleWishlist(product);

    if (inWishlist) {
      toast.success("Removed from wishlist");
    } else {
      toast.success("Added to wishlist");
    }
  };

  return (
    <div className="group flex flex-col font-inknut relative">
      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative w-full aspect-3/4 overflow-hidden rounded-md bg-[#FFEDF0]">
          <Image
            src={product.image || "/fallback.png"}
            alt={product.title || "Product"}
            fill
            className="object-cover bg-[#f8e5e5]"
          />

          {/* Save Badges */}
          {product.discount && (
            <div className="absolute top-3 left-3 bg-[#E32C2B] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm z-10">
              {product.discount}
            </div>
          )}

          {/* Wishlist Icon */}
          <button
            className="absolute top-3 right-3 p-1.5 z-10 bg-transparent cursor-pointer hover:scale-110 transition-transform"
            onClick={handleWishlistClick}
          >
            <GoHeart
              size={22}
              className={`font-bold drop-shadow-sm transition-all ${
                inWishlist ? "fill-[#FC6C85] text-[#FC6C85]" : "text-gray-800"
              }`}
              style={{ strokeWidth: 1 }}
            />
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
      </Link>
    </div>
  );
}
