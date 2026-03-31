import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react'; // Optional: npm install lucide-react

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
        image: '/images/home/flat-fifty/image-2.png',
        title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
        price: '999.00',
        originalPrice: '1,900.00',
        discount: 'SAVE 50%',
    },
    {
        id: 3,
        image: '/images/home/flat-fifty/image-3.png',
        title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
        price: '999.00',
        originalPrice: '1,900.00',
        discount: 'SAVE 50%',
    },
    {
        id: 4,
        image: '/images/home/flat-fifty/image-4.png',
        title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
        price: '999.00',
        originalPrice: '1,900.00',
        discount: 'SAVE 50%',
    },


];

const ProductCard = ({ product }) => (
    <div className="group flex flex-col items-center">
        {/* Image Container */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md bg-gray-100 cursor-pointer">
            <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
            />

            {/* Save Tag */}
            <div className="absolute top-3 left-3 bg-[#E32C2B] rounded-xs text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                {product.discount}
            </div>

            {/* Wishlist Icon */}
            <button className="absolute top-3 right-3 p-1.5 ">
                <Heart size={18} className="text-gray-700" />
            </button>
        </div>

        {/* Product Info */}
        <div className="mt-4 text-center space-y-2">
            <h3 className="text-[11px] md:text-xs font-medium text-gray-800 leading-tight tracking-wide px-2 uppercase">
                {product.title}
            </h3>
            <div className="flex items-center justify-center gap-2 font-inria">
                <span className="text-[#E01A69] font-bold text-sm md:text-base uppercase">
                    RS {product.price}
                </span>
                <span className="text-[rgba(77,106,57,0.67)] line-through text-[11px] md:text-xs">
                    RS {product.originalPrice}
                </span>
            </div>
        </div>
    </div>
);

export default function CoOrdSets() {
    return (
        <section className="bg-[#fdf2f2] py-16 px-4 md:px-8 lg:px-16 font-inknut">
            <div className="max-w-7xl mx-auto font-inknut">
                {/* Section Heading */}
                <h2 className="text-3xl -mt-10 md:text-[26px] lg:text-[32px] font-bold text-center mb-6 uppercase tracking-wider text-gray-900">
                    Co-ord Sets — Flat ₹999
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
                    {/* Mapping through 4 items for demo purposes */}
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={{
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
                <div className="mt-8 flex justify-center">
                    <button className="bg-[#FC6C85] text-white px-10 py-3 text-sm font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
}