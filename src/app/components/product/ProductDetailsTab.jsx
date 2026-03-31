import React from 'react';

export default function ProductDetailsTab({ product }) {
    return (
        <div className="w-full font-inknut space-y-12">
            {/* About Section */}
            <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                    About The Product
                </h3>
                <ul className="list-disc pl-5 space-y-3 font-semibold text-gray-800 text-sm leading-relaxed max-w-3xl">
                    {product.about.map((point, index) => (
                        <li key={index} className="pl-1 tracking-wide">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Details Table */}
            <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                    Details
                </h3>
                <div className="flex flex-col space-y-2 mt-4 max-w-3xl">
                    {Object.entries(product.details).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2.5 hover:bg-gray-50 text-sm font-semibold text-gray-800 tracking-wide border-b border-white">
                            <span className="w-1/2 md:w-1/3 shrink-0">{key}</span>
                            <span className="w-1/2 md:w-2/3 text-right text-gray-700">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
