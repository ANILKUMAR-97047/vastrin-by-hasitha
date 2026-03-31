import React from 'react';


import { getProductDetails } from '../../data/productData';
import { generateProducts } from '../../data/collectionsData';

import ProductGallery from '../../components/product/ProductGallery';
import ProductInfo from '../../components/product/ProductInfo';
import ProductDetailsTab from '../../components/product/ProductDetailsTab';
import ProductReviews from '../../components/product/ProductReviews';
import ProductSection from '../../components/product/ProductSection';

export default async function ProductDetailPage({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const product = getProductDetails(id);

    // Fetch mock related products
    const relatedProducts = generateProducts(5);
    const recentlyViewed = generateProducts(5).reverse();

    return (
        <div className="min-h-screen flex flex-col bg-[#FFEDF0]">


            <main className="grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-16 bg-[#FFEDF0]">

                {/* Header title */}
                <div className="w-full font-inknut text-center mb-8">
                    <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-900 border-b border-gray-200 inline-block pb-3">
                        FEATURED PRODUCT
                    </h2>
                </div>

                {/* Top Section: Gallery & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <div className="w-full flex justify-center lg:justify-end">
                        <ProductGallery images={product.galleryImages} />
                    </div>

                    <div className="w-full flex">
                        <ProductInfo product={product} />
                    </div>
                </div>

                {/* Middle Section: About & Details List */}
                <div className="w-full pt-10 px-0 md:px-4 xl:px-8 bg-[bg-[#FFEDF0]]">
                    <ProductDetailsTab product={product} />
                </div>

                {/* Reviews Section */}
                <div className="w-full pt-16 px-0 md:px-4 xl:px-8">
                    <ProductReviews product={product} />
                </div>

                {/* Related Products */}
                <div className="w-full pt-10 border-t border-gray-200">
                    <ProductSection title="RELATED PRODUCTS" products={relatedProducts} />
                </div>

                {/* Recently Viewed */}
                <div className="w-full pb-10">
                    <ProductSection title="RECENTLY VIEWED PRODUCTS" products={recentlyViewed} />
                </div>

            </main>


        </div>
    );
}
