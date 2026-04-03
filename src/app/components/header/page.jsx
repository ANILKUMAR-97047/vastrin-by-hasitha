"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const { wishlist } = useWishlist();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  // --- ADDED FIX FOR SCROLLING ---
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  // -------------------------------

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Kurti Sets", href: "/collections/kurti-sets" },
    { name: "Co-ord sets", href: "/collections/coord-sets" },
    { name: "Best Sellers", href: "/collections/best-sellers" },
    { name: "Special Category", href: "/collections/special-category" },
    { name: "Accessories", href: "/collections/accessories" },
  ];

  const handleProtectedRoute = async (path) => {
    const res = await fetch("/api/auth/me");
    if (!res.ok) {
      router.push("/login");
      return;
    }
    router.push(path);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <img
              className="w-16 h-16 object-contain"
              src="/images/logos/vastrinheader.svg"
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
                  className={`font-inknut text-[17px] tracking-[-0.6px] transition-colors ${
                    isActive
                      ? "text-[#FC6C85] font-semibold underline decoration-solid [text-underline-position:from-font]"
                      : "text-[#DBA622] font-normal hover:text-[#FC6C85]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Icons (Desktop ONLY - lg and up) */}
          <div className="hidden lg:flex items-center space-x-5 lg:space-x-6">
            <div className="flex gap-3 items-center">
              <IoSearchOutline className="text-[#DBA622]" size={24} />

              <button
                onClick={() => handleProtectedRoute("/wishlist")}
                className="relative cursor-pointer"
              >
                <GoHeart className="text-[#DBA622]" size={24} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FC6C85] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => handleProtectedRoute("/cart")}
                className="relative cursor-pointer"
              >
                <PiHandbagSimpleLight className="text-[#DBA622]" size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FC6C85] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {!loading && (
                <>
                  {user ? (
                    <Link href="/profile">
                      <img
                        className="w-[24px] h-[24px] rounded-full cursor-pointer"
                        src="/images/logos/profile.png"
                        alt="User Profile"
                      />
                    </Link>
                  ) : (
                    <button
                      onClick={() => router.push("/login")}
                      className="text-[#DBA622] ml-4 lg:text-[16px] font-semibold cursor-pointer"
                    >
                      Login
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button (Shown on Mobile & Tablet) */}
          <div className="flex justify-center items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-rose-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className={`block px-3 py-2.5 rounded-md font-['Inknut_Antiqua'] text-[17px] tracking-[-0.6px] ${
                      isActive
                        ? "text-[#FC6C85] font-semibold underline bg-gray-50"
                        : "text-[#DBA622] font-normal hover:bg-gray-50 hover:text-[#FC6C85]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Icons (Visible for both Tablet and Mobile inside the menu) */}
            <div className="flex gap-4 ml-7 mb-6 mt-2 items-center">
              {!loading && user && (
                <Link href="/profile">
                  <img
                    className="w-[24px] h-[24px] object-fill rounded-full cursor-pointer"
                    src="/images/logos/profile.png"
                    alt="User Profile"
                  />
                </Link>
              )}
              
              <IoSearchOutline className="text-[#DBA622]" size={24} />
              
              <Link href="/wishlist" className="relative">
                <GoHeart className="text-[#DBA622]" size={24} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FC6C85] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="relative">
                <PiHandbagSimpleLight className="text-[#DBA622]" size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FC6C85] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {!loading && !user && (
                <button
                  onClick={() => router.push("/login")}
                  className="text-[#DBA622] font-semibold"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}