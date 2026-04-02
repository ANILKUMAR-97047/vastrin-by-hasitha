"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GoHeart } from "react-icons/go";
import { BsArrowReturnLeft, BsShieldCheck } from "react-icons/bs";
import { FaTruck, FaMedal } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import toast from "react-hot-toast";

export default function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/me");

      if (!res.ok) {
        toast.error("Please login first");
        router.push("/login");
        return false;
      }

      return true;
    } catch (error) {
      router.push("/login");
      return false;
    }
  };

  const handleQuantity = (type) => {
    if (type === "inc") setQuantity((q) => q + 1);
    if (type === "dec" && quantity > 1) setQuantity((q) => q - 1);
  };

  // const handleAddToCart = () => {

  //     const cartProduct = {
  //         ...product,
  //         image: product.galleryImages ? product.galleryImages[0] : product.image,
  //     };
  //     addToCart(cartProduct, selectedSize, selectedColor.name, quantity);
  //     toast.success('Added to cart!');
  //     setQuantity(1);
  // };

  const handleAddToCart = async () => {
    const isLoggedIn = await checkAuth();
    if (!isLoggedIn) return;

    const cartProduct = {
      ...product,
      image: product.galleryImages ? product.galleryImages[0] : product.image,
    };

    addToCart(cartProduct, selectedSize, selectedColor.name, quantity);
    toast.success("Added to cart!");
    setQuantity(1);
  };

  // const handleAddToWishlist = () => {
  //     toggleWishlist(product);
  //     if (inWishlist) {
  //         toast.success('Removed from wishlist');
  //     } else {
  //         toast.success('Added to wishlist');
  //     }
  // };

  const handleAddToWishlist = async () => {
    const isLoggedIn = await checkAuth();
    if (!isLoggedIn) return;

    toggleWishlist(product);

    if (inWishlist) {
      toast.success("Removed from wishlist");
    } else {
      toast.success("Added to wishlist");
    }
  };

  const handleBuyNow = async () => {
    const isLoggedIn = await checkAuth();
    if (!isLoggedIn) return;

    const cartProduct = {
      ...product,
      image: product.galleryImages ? product.galleryImages[0] : product.image,
    };

    addToCart(cartProduct, selectedSize, selectedColor.name, quantity);

    // redirect to cart or checkout
    router.push("/cart");
  };
  return (
    <div className="flex flex-col font-inknut text-gray-800 space-y-6">
      {/* Headers */}
      <div className="space-y-2">
        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
          {product.brand}
        </p>
        <h1 className="text-sm md:text-base lg:text-lg font-bold leading-snug uppercase">
          {product.title}
        </h1>

        {product.discount && (
          <span className="inline-block bg-[#E32C2B] text-white text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm mt-2">
            {product.discount}
          </span>
        )}
      </div>

      {/* Pricing */}
      <div className="flex items-center gap-3 font-inria mt-2">
        <span className="text-[#FC6C85] font-bold text-xl md:text-2xl uppercase tracking-wide">
          RS {product.price}
        </span>
        <span className="text-[rgba(77,106,57,0.67)] line-through text-md md:text-lg">
          RS {product.originalPrice}
        </span>
      </div>

      {/* Ratings Summary (mock) */}
      <div className="flex items-center gap-1 text-[#D4AF37] text-sm">
        <span>★★★★★</span>
        <span className="text-gray-500 text-xs ml-2">
          5.0 / 5 ({product.reviewCount})
        </span>
      </div>

      {/* Size Selector */}
      <div className="space-y-3 font-inria">
        <p className="text-sm font-semibold">Size :</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 text-sm border hover:border-gray-800 transition 
                            ${selectedSize === size ? "border-gray-800 bg-gray-50" : "border-gray-300"}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selector */}
      <div className="space-y-3 font-inria">
        <p className="text-sm font-semibold">Color : {selectedColor.name}</p>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 border-2 transition ${selectedColor.name === color.name ? "border-gray-800 p-0.5" : "border-transparent"}`}
            >
              <span
                className="block w-full h-full"
                style={{ backgroundColor: color.hex }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Actions: Quantity & Add */}
      <div className="space-y-4 pt-4">
        {/* Quantity */}
        <div className="flex items-center border border-gray-300 w-fit">
          <button
            onClick={() => handleQuantity("dec")}
            className="px-4 py-2 hover:bg-gray-100 transition"
          >
            -
          </button>
          <span className="px-4 py-2 font-bold min-w-12 text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantity("inc")}
            className="px-4 py-2 hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>

        <div className="flex flex-col gap-3 max-w-[400px]">
          <button
            onClick={handleAddToCart}
            className="w-full py-3.5 border border-[#FC6C85] text-[#FC6C85] hover:bg-[#ffeef1] font-bold text-sm tracking-widest transition cursor-pointer"
          >
            ADD TO CART
          </button>
          <button
            onClick={handleBuyNow}
            className="w-full py-3.5 bg-[#FC6C85] text-white hover:bg-[#e85b75] font-bold text-sm tracking-widest transition cursor-pointer"
          >
            BUY IT NOW
          </button>
          <button
            onClick={handleAddToWishlist}
            className={`cursor-pointer w-full py-3.5 font-bold text-sm tracking-widest transition flex items-center justify-center gap-2 ${
              inWishlist
                ? "bg-[#FC6C85] text-white hover:bg-[#e85b75]"
                : "bg-[#FC6C85] text-white hover:bg-[#e85b75]"
            }`}
          >
            <GoHeart
              size={18}
              style={{ strokeWidth: 1 }}
              className={inWishlist ? "fill-white" : ""}
            />
            {inWishlist ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}
          </button>
        </div>
      </div>

      {/* Secure Checkout */}
      <div className="pt-6 font-inria">
        <p className="text-center font-bold text-sm mb-4">
          Secure Checkout with
        </p>
        <div className="flex justify-center flex-wrap gap-6 md:gap-8 opacity-80 text-center text-[10px]">
          <div className="flex flex-col items-center gap-2 max-w-[60px]">
            <IoReturnUpBackOutline size={28} />
            <span>10 Days Return</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[60px]">
            <FaTruck size={28} />
            <span>Cash on Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[60px]">
            <MdOutlineSecurity size={28} />
            <span>Secure Shipping</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[60px]">
            <FaMedal size={28} />
            <span>Quality Guaranteed</span>
          </div>
          <div className="flex flex-col items-center gap-2 max-w-[60px]">
            <BsShieldCheck size={28} />
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
