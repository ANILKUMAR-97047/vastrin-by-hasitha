import React from 'react';
import ProductCard from '../shared/ProductCard';
import PopularSearches from '../home/popular-searches/page'; 
import { FiGrid } from "react-icons/fi"; 
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function CollectionLayout({ title, products, breadcrumbs, seoParagraphs }) {
    return (
        <React.Fragment>
            {/* Top Toolbar */}
            <div className="w-full bg-[#fdf2f2] border-b border-pink-100 py-4 px-6 md:px-12 flex justify-between items-center font-inknut text-sm">
                <div className="flex items-center text-gray-500 cursor-pointer hover:text-gray-800 transition-colors">
                    <FiGrid size={22} />
                </div>
                <div className="text-gray-700 font-semibold hidden sm:block tracking-wide">
                    125 Products
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-[#FC6C85] transition-colors">
                        <span>Sort By</span>
                        <MdOutlineKeyboardArrowDown size={20} />
                    </div>
                    <div className="cursor-pointer text-gray-800 hover:text-[#FC6C85] transition-colors">
                        <span>Filter</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <section className="bg-[#fdf2f2] py-10 px-4 md:px-8 lg:px-16 pb-10">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 mb-20 flex justify-center items-center gap-4 font-inknut text-sm font-bold text-gray-800">
                        <span className="cursor-pointer border-b-2 border-gray-800 pb-1 px-1">1</span>
                        <span className="cursor-pointer border-b-2 border-transparent hover:border-gray-800 pb-1 px-1 text-gray-500 transition-colors">2</span>
                        <span className="cursor-pointer border-b-2 border-transparent hover:border-gray-800 pb-1 px-1 text-gray-500 transition-colors">3</span>
                        <span className="px-2 text-gray-500">...</span>
                        <span className="cursor-pointer border-b-2 border-transparent hover:border-gray-800 pb-1 px-1 text-gray-500 transition-colors">6</span>
                        <MdOutlineKeyboardArrowRight size={20} className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors" />
                    </div>

                    {/* SEO Footer Area */}
                    <div className="mt-10 border-t border-pink-100 pt-16">
                        <p className="text-[10px] sm:text-xs text-gray-500 font-inknut tracking-[0.2em] uppercase mb-8">
                            {breadcrumbs}
                        </p>
                        <h1 className="text-3xl md:text-4xl text-center text-[#FC6C85] font-inknut font-bold uppercase mb-10 tracking-wider">
                            {title}
                        </h1>
                        <div className="flex flex-col gap-6 font-inika text-sm md:text-[15px] text-gray-800 leading-[1.8] max-w-4xl">
                            {seoParagraphs.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Reusable Popular Searches block */}
            <div className="bg-[#fdf2f2]">
                <PopularSearches />
            </div>
        </React.Fragment>
    );
}
