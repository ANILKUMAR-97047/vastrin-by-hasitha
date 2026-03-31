// 'use client';

// import React from 'react';
// import { ArrowLeft, SlidersHorizontal, Search, Download, ChevronRight } from 'lucide-react';

// const MyOrders = () => {
//     const orders = [
//         {
//             id: "ORD2024031501",
//             date: "15 Mar 2024",
//             product: "Roadster Men Blue Denim Jacket",
//             size: "L",
//             color: "Blue",
//             qty: 1,
//             price: 1499,
//             originalPrice: 2999,
//             status: "Delivered",
//             statusDate: "18 Mar 2024",
//             image: "/images/my-orders-images/image-1.png"
//         },
//         {
//             id: "ORD2024031402",
//             date: "14 Mar 2024",
//             product: "Nike Women White Running Shoes",
//             size: "7",
//             color: "White",
//             qty: 1,
//             price: 4295,
//             status: "In Transit",
//             statusDate: "20 Mar",
//             image: "/images/my-orders-images/image-2.png"
//         },
//         {
//             id: "ORD2024031203",
//             date: "12 Mar 2024",
//             product: "Fossil Men Black Analog Watch",
//             color: "Black",
//             qty: 1,
//             price: 7995,
//             originalPrice: 12995,
//             status: "Cancelled",
//             statusDate: "13 Mar 2024",
//             image: "/images/my-orders-images/image-3.png"
//         }
//     ];

//     return (
//         <div className="bg-[#FCFCFC] min-h-screen p-4 md:p-8 lg:px-24 font-serif">
//             <div className="max-w-6xl mx-auto">

//                 {/* Header Section */}
//                 <div className="flex items-center gap-4 mb-8">
//                     <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <ArrowLeft size={24} className="text-[#1A1A1A]" />
//                     </button>
//                     <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">My Orders</h1>
//                 </div>

//                 {/* Search and Filter Bar */}
//                 <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
//                     <div className="relative w-full md:max-w-md">
//                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                         <input
//                             type="text"
//                             placeholder="Search your orders by product name or order ID"
//                             className="w-full pl-10 pr-4 py-2.5 border border-gray-100 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 text-sm"
//                         />
//                     </div>
//                     <button className="flex items-center gap-2 ml-auto font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity">
//                         <SlidersHorizontal size={20} />
//                         <span>Filters</span>
//                     </button>
//                 </div>

//                 {/* Orders List */}
//                 <div className="space-y-6">
//                     {orders.map((order) => (
//                         <div key={order.id} className="bg-white border border-gray-50 rounded-xl p-5 md:p-7 shadow-sm">

//                             {/* Order Meta Info */}
//                             <div className="flex justify-between items-start mb-6">
//                                 <div>
//                                     <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Order ID</p>
//                                     <p className="text-sm font-bold text-gray-700 italic font-serif">#{order.id}</p>
//                                 </div>
//                                 <p className="text-[11px] text-gray-400 font-medium">Placed on {order.date}</p>
//                             </div>

//                             {/* Product Details */}
//                             <div className="flex flex-col md:flex-row gap-6">
//                                 <div className="w-24 h-28 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
//                                     <img src={order.image} alt={order.product} className="w-full h-full object-cover" />
//                                 </div>

//                                 <div className="flex-grow space-y-2">
//                                     <h3 className="text-lg font-bold text-gray-800 leading-tight">
//                                         {order.product}
//                                     </h3>

//                                     <div className="flex gap-4 text-xs text-gray-400 font-medium">
//                                         {order.size && <span>Size: <span className="text-gray-600">{order.size}</span></span>}
//                                         <span>Color: <span className="text-gray-600">{order.color}</span></span>
//                                         <span>Qty: <span className="text-gray-600">{order.qty}</span></span>
//                                     </div>

//                                     <div className="flex items-center gap-2 pt-1">
//                                         <span className="text-lg font-bold text-gray-900">₹{order.price.toLocaleString()}</span>
//                                         {order.originalPrice && (
//                                             <span className="text-sm text-gray-300 line-through font-medium">₹{order.originalPrice.toLocaleString()}</span>
//                                         )}
//                                     </div>

//                                     {/* Dynamic Status Badges */}
//                                     <div className="pt-3">
//                                         {order.status === "Delivered" && (
//                                             <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#E8F5E9] text-[#2E7D32] text-[11px] font-bold">
//                                                 ✓ Delivered on {order.statusDate}
//                                             </span>
//                                         )}
//                                         {order.status === "In Transit" && (
//                                             <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#FFF8E1] text-[#F57F17] text-[11px] font-bold">
//                                                 ⟳ In Transit - Expected by {order.statusDate}
//                                             </span>
//                                         )}
//                                         {order.status === "Cancelled" && (
//                                             <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#FFEBEE] text-[#C62828] text-[11px] font-bold">
//                                                 ✕ Cancelled on {order.statusDate}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Actions Section */}
//                                 <div className="flex flex-col md:items-end justify-end gap-3 mt-4 md:mt-0">
//                                     <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
//                                         {(order.status === "Delivered" || order.status === "Cancelled") && (
//                                             <button className="text-xs font-bold text-[#4A69BD] flex items-center gap-1 hover:underline px-2 py-2">
//                                                 Download Invoice
//                                             </button>
//                                         )}
//                                         <button className="px-6 py-2.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors bg-white min-w-[120px]">
//                                             View Details
//                                         </button>
//                                         {order.status === "Delivered" && (
//                                             <button className="px-6 py-2.5 bg-[#FF758C] text-white rounded-lg text-xs font-bold hover:bg-[#ff5e7a] transition-all min-w-[120px]">
//                                                 Return / Exchange
//                                             </button>
//                                         )}
//                                         {order.status === "In Transit" && (
//                                             <button className="px-6 py-2.5 bg-[#FF758C] text-white rounded-lg text-xs font-bold hover:bg-[#ff5e7a] transition-all min-w-[120px]">
//                                                 Track Order
//                                             </button>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyOrders;


'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
    ArrowLeft,
    SlidersHorizontal,
    Search,
    ChevronDown,
    Box,
    CheckCircle2,
    Truck,
    XCircle,
    RotateCcw
} from 'lucide-react';
import { useRouter } from 'next/navigation';
const MyOrders = () => {
    const [activeFilter, setActiveFilter] = useState('All Orders');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter()

    const orders = [
        {
            id: "ORD2024031501",
            date: "15 Mar 2024",
            product: "Roadster Men Blue Denim Jacket",
            size: "L",
            color: "Blue",
            qty: 1,
            price: 1499,
            originalPrice: 2999,
            status: "Delivered",
            statusDate: "18 Mar 2024",
            image: "/images/my-orders-images/image-1.png"
        },
        {
            id: "ORD2024031402",
            date: "14 Mar 2024",
            product: "Nike Women White Running Shoes",
            size: "7",
            color: "White",
            qty: 1,
            price: 4295,
            status: "In Transit",
            statusDate: "20 Mar",
            image: "/images/my-orders-images/image-2.png"
        },
        {
            id: "ORD2024031203",
            date: "12 Mar 2024",
            product: "Fossil Men Black Analog Watch",
            color: "Black",
            qty: 1,
            price: 7995,
            originalPrice: 12995,
            status: "Cancelled",
            statusDate: "13 Mar 2024",
            image: "/images/my-orders-images/image-3.png"
        }
    ];

    // Filter Options configuration
    const filterOptions = [
        { id: 'All Orders', label: 'All Orders', icon: Box, count: orders.length },
        { id: 'Delivered', label: 'Delivered', icon: CheckCircle2, count: orders.filter(o => o.status === 'Delivered').length },
        { id: 'In Transit', label: 'In Transit', icon: Truck, count: orders.filter(o => o.status === 'In Transit').length },
        { id: 'Cancelled', label: 'Cancelled', icon: XCircle, count: orders.filter(o => o.status === 'Cancelled').length },
        { id: 'Returned', label: 'Returned', icon: RotateCcw, count: 0 },
    ];

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Logic to filter the orders
    const filteredOrders = activeFilter === 'All Orders'
        ? orders
        : orders.filter(order => order.status === activeFilter);

    return (
        <div className="bg-[#FCFCFC] min-h-screen p-4 md:p-8 lg:px-24 font-serif">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => router.push("/profile")} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft size={24} className="text-[#1A1A1A]" />
                    </button>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">My Orders</h1>
                </div>

                {/* Search and Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search your orders by product name or order ID"
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-100 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 text-sm"
                        />
                    </div>

                    {/* Dropdown Filter */}
                    <div className="relative ml-auto w-full md:w-64" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between w-full gap-2 font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity border border-gray-100 rounded-lg px-4 py-2.5 bg-white shadow-sm"
                        >
                            <div className="flex items-center gap-2">
                                <SlidersHorizontal size={20} className="text-[#FF758C]" />
                                <span>{activeFilter}</span>
                            </div>
                            <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden">
                                <div className="p-2">
                                    {filterOptions.map((option) => {
                                        const Icon = option.icon;
                                        const isActive = activeFilter === option.id;
                                        return (
                                            <button
                                                key={option.id}
                                                onClick={() => {
                                                    setActiveFilter(option.id);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors mb-1 last:mb-0 ${isActive ? 'bg-[#FFF5F7] text-[#FF758C]' : 'text-[#2D3748] hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon size={18} className={isActive ? 'text-[#FF758C]' : 'text-gray-400'} />
                                                    <span className="font-bold text-sm">{option.label}</span>
                                                </div>
                                                <span className="text-xs text-gray-400">({option.count})</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Orders List */}
                <div className="space-y-6">
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                            <div key={order.id} className="bg-white border border-gray-50 rounded-xl p-5 md:p-7 shadow-sm">
                                {/* Order Meta Info */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Order ID</p>
                                        <p className="text-sm font-bold text-gray-700 italic font-serif">#{order.id}</p>
                                    </div>
                                    <p className="text-[11px] text-gray-400 font-medium">Placed on {order.date}</p>
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-24 h-28 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={order.image} alt={order.product} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-grow space-y-2">
                                        <h3 className="text-lg font-bold text-gray-800 leading-tight">{order.product}</h3>
                                        <div className="flex gap-4 text-xs text-gray-400 font-medium">
                                            {order.size && <span>Size: <span className="text-gray-600">{order.size}</span></span>}
                                            <span>Color: <span className="text-gray-600">{order.color}</span></span>
                                            <span>Qty: <span className="text-gray-600">{order.qty}</span></span>
                                        </div>
                                        <div className="flex items-center gap-2 pt-1">
                                            <span className="text-lg font-bold text-gray-900">₹{order.price.toLocaleString()}</span>
                                            {order.originalPrice && (
                                                <span className="text-sm text-gray-300 line-through font-medium">₹{order.originalPrice.toLocaleString()}</span>
                                            )}
                                        </div>

                                        <div className="pt-3">
                                            {order.status === "Delivered" && (
                                                <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#E8F5E9] text-[#2E7D32] text-[11px] font-bold">
                                                    ✓ Delivered on {order.statusDate}
                                                </span>
                                            )}
                                            {order.status === "In Transit" && (
                                                <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#FFF8E1] text-[#F57F17] text-[11px] font-bold">
                                                    ⟳ In Transit - Expected by {order.statusDate}
                                                </span>
                                            )}
                                            {order.status === "Cancelled" && (
                                                <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#FFEBEE] text-[#C62828] text-[11px] font-bold">
                                                    ✕ Cancelled on {order.statusDate}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:items-end justify-end gap-3 mt-4 md:mt-0">
                                        <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
                                            {(order.status === "Delivered" || order.status === "Cancelled") && (
                                                <button className="text-xs font-bold text-[#4A69BD] flex items-center gap-1 hover:underline px-2 py-2">
                                                    Download Invoice
                                                </button>
                                            )}
                                            <button className="px-6 py-2.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors bg-white min-w-[120px]">
                                                View Details
                                            </button>
                                            {order.status === "Delivered" && (
                                                <button className="px-6 py-2.5 bg-[#FF758C] text-white rounded-lg text-xs font-bold hover:bg-[#ff5e7a] transition-all min-w-[120px]">
                                                    Return / Exchange
                                                </button>
                                            )}
                                            {order.status === "In Transit" && (
                                                <button className="px-6 py-2.5 bg-[#FF758C] text-white rounded-lg text-xs font-bold hover:bg-[#ff5e7a] transition-all min-w-[120px]">
                                                    Track Order
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                            <p className="text-gray-400 italic">No orders found for "{activeFilter}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;