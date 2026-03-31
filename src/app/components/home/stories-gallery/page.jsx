import React from 'react';
import Image from 'next/image';

const storyImages = [
  { id: 1, src: '/images/home/stories-gallery/image-1.png' },
  { id: 2, src: '/images/home/stories-gallery/image-2.png' },
  { id: 3, src: '/images/home/stories-gallery/image-3.png' },
  { id: 4, src: '/images/home/stories-gallery/image-4.png' },
];

export default function StoriesGallery() {
  return (
    <section className="bg-[#fdf2f2] py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-center font-inknut text-[24px] md:text-[28px] lg:text-[32px] font-bold uppercase tracking-[0.1em] text-[#FC6C85] mb-12">
          Vastrin By Hasitha Stories
        </h2>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {storyImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <Image
                src={image.src}
                alt={`Vastrin Story ${image.id}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Footer Tagline */}
        <div className="mt-12">
          <p className="text-sm md:text-base font-medium text-gray-800 underline decoration-1 underline-offset-4 cursor-pointer hover:text-[#f472b6] transition-colors inline-block">
            @Vastrin by hasitha
          </p>
        </div>

      </div>
    </section>
  );
}