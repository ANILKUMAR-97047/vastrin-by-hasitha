'use client';

import React from 'react';
import ProductCard from '../../shared/ProductCard';

const products = [
    {
        id: 1,
        image: '/images/home/fresh-drop/image-1.png',
        title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
        price: '999.00',
        originalPrice: '1,900.00',
        discount: 'SAVE 50%',
    },
    {
        id: 2,
        image: '/images/home/fresh-drop/image-2.png',
        title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
        price: '999.00',
        originalPrice: '1,900.00',
        discount: 'SAVE 50%',
    },
    {
        id: 3,
        image: '/images/home/fresh-drop/image-3.png',
        title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
        price: '999.00',
        originalPrice: '1,900.00',
        discount: 'SAVE 50%',
    },
    {
        id: 4,
        image: '/images/home/fresh-drop/image-4.png',
        title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
        price: '999.00',
        originalPrice: '1,900.00',
        discount: 'SAVE 50%',
    },
];

export default function FreshDrop() {
    return (
        <section className="bg-[#fdf2f2] py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-3xl font-inknut md:text-4xl text-center mb-12 uppercase tracking-[0.2em] text-gray-900 font-bold">
                    Fresh Drop
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
                    {/* Mapping through 4 items for demo purposes */}
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={{
                                id: product.id,
                                image: product.image,
                                title: product.title,
                                price: product.price,
                                originalPrice: product.originalPrice,
                                discount: product.discount,
                            }}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-8 flex justify-center -mb-10 font-inknut">
                    <button className="bg-[#f472b6] hover:bg-[#ec4899] text-white px-10 py-3 text-sm font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
}