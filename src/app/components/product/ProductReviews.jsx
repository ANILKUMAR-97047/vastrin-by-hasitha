import React from 'react';

const renderStars = (rating) => {
    return Array(rating).fill('★').join('');
};

export default function ProductReviews({ product }) {
    if (!product.reviews || product.reviews.length === 0) return null;

    return (
        <div className="w-full font-inknut space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide">
                    Customer <span className="italic font-inria font-normal">Reviews</span>
                </h3>
                <button className="bg-[#D4AF37] hover:bg-[#c19b28] text-white px-6 py-2.5 text-sm font-semibold tracking-wide transition">
                    Write a Review
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 pt-4">
                {/* Review Overview Sidebar */}
                <div className="flex flex-col w-full lg:w-1/3 min-w-[280px]">
                    <div className="flex items-end gap-3 mb-6">
                        <span className="text-4xl md:text-5xl font-bold font-inria leading-none">5</span>
                        <span className="text-xl text-gray-500 font-inria pb-1">/ 5</span>
                        <span className="text-[#D4AF37] text-xl ml-2 tracking-widest pb-1">★★★★★</span>
                        <span className="text-sm text-gray-400 ml-1 pb-1 font-inria">{product.reviewCount} reviews</span>
                    </div>

                    <div className="space-y-3 font-inria text-sm text-gray-700 font-semibold w-full max-w-[300px]">
                        {[
                            { level: 5, count: 100 },
                            { level: 4, count: 11 },
                            { level: 3, count: 3 },
                            { level: 2, count: 8 },
                            { level: 1, count: 1 }
                        ].map(bar => {
                            const percentage = (bar.count / 123) * 100; // rough mock total
                            return (
                                <div key={bar.level} className="flex items-center gap-4">
                                    <span className="w-4">{bar.level}</span>
                                    <div className="flex-1 h-1.5 bg-gray-200">
                                        <div 
                                            className="h-full bg-[#FC6C85]" 
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <span className="w-8 text-right text-gray-500">{bar.count}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Reviews List */}
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    {product.reviews.map(review => (
                        <div key={review.id} className="bg-white p-5 shadow-sm border border-gray-100 flex flex-col space-y-3">
                            <h4 className="font-bold text-sm tracking-wide text-gray-900">{review.name}</h4>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-xs font-inria italic">{review.date}</span>
                                <span className="text-[#D4AF37] text-xs">★★★★★</span>
                            </div>
                            <p className="text-xs text-gray-600 font-medium font-inria leading-relaxed mt-2 pt-2 border-t border-gray-50">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
