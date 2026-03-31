"use client";
import React from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return null;

    // Simple range generator for scalable pagination UI
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center gap-4 font-inknut text-[22px] font-bold text-gray-800">
            {currentPage > 1 && (
                <MdOutlineKeyboardArrowLeft
                    size={30}
                    className="cursor-pointer text-gray-800 hover:text-[#FC6C85] transition-colors"
                    onClick={() => onPageChange(currentPage - 1)}
                />
            )}

            {getPageNumbers().map((page, idx) => (
                <span
                    key={idx}
                    onClick={() => typeof page === 'number' ? onPageChange(page) : null}
                    className={`cursor-pointer pb-0 border-b-[2.5px] px-1 transition-colors ${page === currentPage
                        ? "border-gray-800 text-gray-800"
                        : page === '...'
                            ? "cursor-default text-gray-800 border-transparent"
                            : "text-gray-800 hover:border-gray-800 border-transparent hover:text-gray-800"
                        }`}
                >
                    {page}
                </span>
            ))}

            {currentPage < totalPages && (
                <MdOutlineKeyboardArrowRight
                    size={30}
                    className="cursor-pointer text-gray-800 hover:text-[#FC6C85] transition-colors"
                    onClick={() => onPageChange(currentPage + 1)}
                />
            )}
        </div>
    );
}
