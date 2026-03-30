import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react'; // Optional: npm install lucide-react

const searchData = [
    {
        label: "Shop by :",
        links: ["Trending Ethnic Wear", "Best Sellers", "Festive Collection"]
    },
    {
        label: "Search by Category :",
        links: ["Kurti sets", "Co-ord Sets", "Best sellers", "Ethnic Sets", "Sale", "Special category"]
    },
    {
        label: "Shop by Kurti Sets :",
        links: ["A-Line", "Straight", "Anarkali", "Printed", "Festive", "Cotton", "Rayon", "Designer", "Indo-Western", "Under ₹999"]
    },
    {
        label: "Shop by Co-ord Sets :",
        links: ["Printed", "Ethnic", "Festive", "Casual", "Travel", "Office", "Partywear", "Cotton", "Rayon", "Under ₹999", "Black"]
    },
    {
        label: "Shop by Best Sellers :",
        links: ["Bestseller Kurtas", "Kurti Sets", "Co-ords", "Daily Wear", "Partywear", "Festive", "Wedding", "Under ₹999"]
    },
    {
        label: "Shop by Sale :",
        links: ["Under ₹599", "Under ₹999", "Under ₹1499", "B1G1", "Clearance Sale", "Kurti & Co-ord Sale", "Budget Styles"]
    },
    {
        label: "Top Special Category :",
        links: ["Festive", "Wedding", "Partywear", "Office", "Daily Wear", "Travel", "Brunch", "Premium", "Pastel", "Black Edit"]
    }
];

export default function PopularSearches() {
    return (
        <section className="relative bg-[#fdf2f2] py-16 px-6 md:px-12 lg:px-24 border-t border-pink-100">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-[#f472b6] font-bold text-sm md:text-base uppercase tracking-widest mb-10">
                    Popular Searches
                </h2>

                {/* Search Rows */}
                <div className="space-y-8">
                    {searchData.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                            {/* Row Label */}
                            <span className="text-gray-900 font-bold text-sm md:text-base whitespace-nowrap min-w-[180px]">
                                {item.label}
                            </span>

                            {/* Links Wrapper */}
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                {item.links.map((link, linkIdx) => (
                                    <React.Fragment key={linkIdx}>
                                        <Link
                                            href={`/search?q=${link.toLowerCase().replace(/ /g, '-')}`}
                                            className="text-gray-700 hover:text-[#f472b6] text-xs md:text-sm transition-colors border-b border-transparent hover:border-[#f472b6]"
                                        >
                                            {link}
                                        </Link>
                                        {linkIdx < item.links.length - 1 && (
                                            <span className="text-gray-400 text-xs">,</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#4c6a3d] hover:bg-[#3e5632] text-white px-4 py-2 rounded-md shadow-lg transition-all transform hover:scale-105 active:scale-95"
                >
                    <div className="bg-white rounded-full p-1">
                        <MessageCircle className="text-[#4c6a3d] w-5 h-5 fill-current" />
                    </div>
                    <span className="font-bold text-sm tracking-wide">Chat With Us</span>
                </a>

            </div>
        </section>
    );
}