'use client';

import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const CartPage = () => {
    // Sample Initial Data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Arayna Women's Pure Cotton Printed Kurta Set with Palazzo Pants & Dupatta",
            size: "Large",
            color: "Black",
            price: 145,
            quantity: 1,
            image: "/images/cartImages/image-1.png" // Replace with your actual image path
        },
        {
            id: 2,
            name: "Women's Cotton Printed Straight Kurti with pant and Dupatta Set",
            size: "Large",
            color: "Black",
            price: 185,
            quantity: 1,
            image: "/images/cartImages/image-2.png" // Replace with your actual image path
        }
    ]);

    const deliveryFee = 15;

    // Handlers for quantity
    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    // Calculations
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal + deliveryFee;

    return (
        <div className="bg-white min-h-screen p-4 md:p-8 lg:p-12 font-serif text-[#333]">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Side: Cart Items List */}
                    <div className="lg:w-2/3 space-y-4">
                        <div className="border border-gray-100 rounded-2xl p-4 md:p-6 shadow-sm bg-white">
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={item.id} className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 py-6 ${index !== cartItems.length - 1 ? 'border-b border-gray-50' : ''}`}>

                                        {/* Product Image */}
                                        <div className="w-32 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-grow space-y-1 text-center sm:text-left">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-[15px] leading-snug max-w-[280px]">
                                                    {item.name}
                                                </h3>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-[#FF758C] hover:bg-pink-50 p-2 rounded-full transition-colors hidden sm:block"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                            <p className="text-sm text-gray-400">Size: <span className="text-gray-600">{item.size}</span></p>
                                            <p className="text-sm text-gray-400">Color: <span className="text-gray-600">{item.color}</span></p>
                                            <p className="text-lg font-bold mt-2">Rs {item.price}</p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex flex-col items-center sm:items-end justify-between h-full gap-4">
                                            {/* Mobile Trash Icon */}
                                            <button onClick={() => removeItem(item.id)} className="sm:hidden text-[#FF758C]">
                                                <Trash2 size={20} />
                                            </button>

                                            <div className="flex items-center bg-[#F4F4F4] rounded-full px-3 py-1 border border-gray-200">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-[#FF758C]">
                                                    <Minus size={16} />
                                                </button>
                                                <span className="mx-4 font-bold text-sm min-w-[20px] text-center">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-[#FF758C]">
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-400 italic">Your cart is empty.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm bg-white sticky top-8">
                            <h2 className="text-2xl font-bold mb-8">Order Summary</h2>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-gray-500 text-lg">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-black italic">Rs {subtotal}</span>
                                </div>

                                <div className="flex justify-between items-center text-gray-500 text-lg border-b border-gray-100 pb-6">
                                    <span>Delivery Fee</span>
                                    <span className="font-bold text-black italic">Rs {deliveryFee}</span>
                                </div>

                                <div className="flex justify-between items-center text-xl font-bold py-2">
                                    <span>Total</span>
                                    <span className="italic">Rs {total}</span>
                                </div>

                                <button className="w-full bg-[#FF758C] text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#ff5e7a] transition-all shadow-lg shadow-pink-100 mt-4">
                                    Go to Checkout <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartPage;