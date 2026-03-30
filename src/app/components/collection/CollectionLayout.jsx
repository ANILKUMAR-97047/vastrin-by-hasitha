"use client";
import React, { useState, useMemo } from 'react';
import ProductCard from '../shared/ProductCard';
import PopularSearches from '../home/popular-searches/page'; 
import Pagination from '../shared/Pagination';
import { FiGrid } from "react-icons/fi"; 
import { MdOutlineKeyboardArrowDown, MdClose } from "react-icons/md";

export default function CollectionLayout({ title, products, breadcrumbs, seoParagraphs }) {
    const [sortOption, setSortOption] = useState('default');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Reset page to 1 when sort changes
    const handleSort = (val) => {
        setSortOption(val);
        setIsSortOpen(false);
        setCurrentPage(1);
    };

    const sortedProducts = useMemo(() => {
        let sorted = [...products];
        if (sortOption === 'price-low') {
            sorted.sort((a, b) => a.priceNum - b.priceNum);
        } else if (sortOption === 'price-high') {
            sorted.sort((a, b) => b.priceNum - a.priceNum);
        }
        return sorted;
    }, [products, sortOption]);

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return sortedProducts.slice(start, start + itemsPerPage);
    }, [sortedProducts, currentPage]);

    return (
        <React.Fragment>
            {/* Top Toolbar */}
            <div className="w-full bg-[#fdf2f2] border-b border-pink-100 py-4 px-6 md:px-12 flex justify-between items-center font-inknut text-sm relative z-20">
                <div className="flex items-center text-gray-800 cursor-pointer hover:text-[#FC6C85] transition-colors">
                    <FiGrid size={22} />
                </div>
                <div className="text-gray-700 font-semibold hidden sm:block tracking-wide">
                    {products.length} Products
                </div>
                <div className="flex items-center gap-6">
                    {/* Sort Dropdown */}
                    <div className="relative">
                        <div 
                            className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-[#FC6C85] transition-colors"
                            onClick={() => setIsSortOpen(!isSortOpen)}
                        >
                            <span>Sort By</span>
                            <MdOutlineKeyboardArrowDown size={20} className={isSortOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                        </div>
                        
                        {isSortOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden z-30 font-inria">
                                <div className="flex flex-col text-[15px] text-gray-600">
                                    <button 
                                        className={`px-4 py-3 text-left hover:bg-pink-50 ${sortOption === 'default' ? 'text-[#FC6C85] font-bold bg-pink-50' : ''}`}
                                        onClick={() => handleSort('default')}
                                    >
                                        Recommended
                                    </button>
                                    <button 
                                        className={`px-4 py-3 text-left hover:bg-pink-50 ${sortOption === 'price-low' ? 'text-[#FC6C85] font-bold bg-pink-50' : ''}`}
                                        onClick={() => handleSort('price-low')}
                                    >
                                        Price: Low to High
                                    </button>
                                    <button 
                                        className={`px-4 py-3 text-left hover:bg-pink-50 ${sortOption === 'price-high' ? 'text-[#FC6C85] font-bold bg-pink-50' : ''}`}
                                        onClick={() => handleSort('price-high')}
                                    >
                                        Price: High to Low
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Filter Trigger */}
                    <div 
                        className="cursor-pointer text-gray-800 hover:text-[#FC6C85] transition-colors"
                        onClick={() => setIsFilterOpen(true)}
                    >
                        <span>Filter</span>
                    </div>
                </div>
            </div>

            {/* Filter Slide-out Modal Component Mock */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}></div>
                    <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 translate-x-0">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-[#fdf2f2]">
                            <h2 className="font-inknut font-bold text-lg text-gray-800 tracking-wide uppercase">Filters</h2>
                            <button onClick={() => setIsFilterOpen(false)} className="p-1 text-gray-600 hover:text-[#FC6C85] transition-colors">
                                <MdClose size={24} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto flex-1 font-inria space-y-8 bg-white">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-4 text-lg">Availability</h3>
                                <label className="flex items-center gap-3 cursor-pointer text-gray-600">
                                    <input type="checkbox" className="w-4 h-4 accent-[#FC6C85]" defaultChecked />
                                    <span>In Stock Only</span>
                                </label>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-4 text-lg">Price Range</h3>
                                <div className="flex items-center gap-4">
                                    <input type="number" placeholder="Min" className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:border-[#FC6C85] focus:ring-1 focus:ring-[#FC6C85]" />
                                    <span className="text-gray-400">-</span>
                                    <input type="number" placeholder="Max" className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:border-[#FC6C85] focus:ring-1 focus:ring-[#FC6C85]" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-4 text-lg">Colors</h3>
                                <div className="flex gap-3 flex-wrap">
                                    {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-400', 'bg-black', 'bg-pink-400'].map((color, idx) => (
                                        <div key={idx} className={`w-8 h-8 rounded-full cursor-pointer border border-gray-200 hover:scale-110 transition-transform ${color}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100 flex gap-4 bg-white">
                            <button className="flex-1 py-3 border-2 border-[#FC6C85] text-[#FC6C85] font-inknut text-[13px] font-bold rounded-sm hover:bg-pink-50 transition-colors" onClick={() => setIsFilterOpen(false)}>
                                CLEAR ALL
                            </button>
                            <button className="flex-1 py-3 bg-[#FC6C85] text-white font-inknut text-[13px] font-bold rounded-sm hover:bg-pink-600 transition-colors" onClick={() => setIsFilterOpen(false)}>
                                APPLY
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <section className="bg-[#fdf2f2] py-10 px-4 md:px-8 lg:px-16 pb-12">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12">
                        {paginatedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Dynamic Reusable Pagination */}
                    <div className="mt-20 mb-10 border-b border-gray-300 pb-16">
                        <Pagination 
                            totalItems={products.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={(page) => {
                                setCurrentPage(page);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        />
                    </div>

                    {/* SEO Footer Area perfectly matched to Figma Image */}
                    <div className="pt-12 max-w-[1200px] mx-auto flex flex-col px-4">
                        <p className="text-[12px] text-gray-600 font-inria tracking-widest uppercase mb-12 uppercase text-left">
                            {breadcrumbs}
                        </p>
                        
                        <h1 className="text-[26px] md:text-3xl text-center text-[#FC6C85] font-inknut font-bold uppercase mb-12 tracking-wider">
                            {title}
                        </h1>
                        
                        <div className="flex flex-col gap-[26px] font-inria text-[17px] text-gray-900 leading-[1.8] max-w-5xl mx-auto text-center md:text-left px-4 md:px-8 bg-transparent">
                            {seoParagraphs.map((para, idx) => {
                                // Extract brand name highlight safely without injecting html
                                if (para.includes('Vastrin by Hasitha.')) {
                                    const parts = para.split('Vastrin by Hasitha.');
                                    return (
                                        <p key={idx} className={idx === seoParagraphs.length - 1 ? "text-center mt-6" : ""}>
                                            {parts[0]}
                                            <span className="text-[#FC6C85] font-bold">Vastrin by Hasitha.</span>
                                            {parts[1]}
                                        </p>
                                    );
                                }
                                return <p key={idx}>{para}</p>;
                            })}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Reusable Popular Searches block */}
            <div className="bg-[#fdf2f2] pt-8">
                <PopularSearches />
            </div>
        </React.Fragment>
    );
}
