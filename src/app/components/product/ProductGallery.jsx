'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images }) {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
            {/* Thumbnails */}
            <div className="flex justify-center md:flex-col gap-3 md:w-20 lg:w-24 overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0 shrink-0">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        className={`relative w-16 h-20 md:w-full md:h-28 shrink-0 border-2 overflow-hidden ${activeImage === img ? 'border-gray-800' : 'border-transparent hover:border-gray-300'}`}
                        onClick={() => setActiveImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 64px, 100px"
                            className="object-cover bg-[#f8e5e5]"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-3/4 md:aspect-auto md:grow min-h-[400px] md:min-h-[500px] bg-[#f8e5e5]">
                <Image
                    src={activeImage}
                    alt="Product Main Image"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    );
}
