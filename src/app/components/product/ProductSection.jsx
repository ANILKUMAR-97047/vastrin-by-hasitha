import React from 'react';
import ProductCard from '../shared/ProductCard';

export default function ProductSection({ title, products }) {
    if (!products || products.length === 0) return null;

    return (
        <section className="w-full font-inknut space-y-8 my-2 bg-[#FFEDF0]">
            <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 tracking-wider uppercase mb-10">
                {title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 md:px-8">
                {products.slice(0, 4).map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
