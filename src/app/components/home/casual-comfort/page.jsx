import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Collection data array for easier management
const collections = [
  {
    id: 1,
    title: 'Ready To Wear',
    image: '/images/home/casual-comfort/image-1.png', // Replace with your paths
    link: '/collections/ready-to-wear',
  },
  {
    id: 2,
    title: 'On the Go Outfits',
    image: '/images/home/casual-comfort/image-2.png',
    link: '/collections/on-the-go',
  },
  {
    id: 3,
    title: 'Casual Wear',
    image: '/images/home/casual-comfort/image-3.png',
    link: '/collections/casual',
  },
  {
    id: 4,
    title: 'Everyday Comfort Wear',
    image: '/images/home/casual-comfort/image-4.png',
    link: '/collections/comfort',
  },
];

const CategoryTile = ({ collection }) => (
  <Link href={collection.link} className="group relative block w-full overflow-hidden rounded-sm">
    {/* Aspect Ratio Container (matches screenshot) */}
    <div className="relative aspect-[1/1.05] w-full bg-gray-100">
      <Image
        src={collection.image}
        alt={collection.title}
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>

    {/* Text Overlay (Centered on image) */}
    <div className="absolute inset-0 flex items-start justify-center p-6 text-center">
      {/* Dynamic text color adjustment based on screenshot */}
      <h3 className={`
        mt-12
       font-inknut
        text-2xl 
        font-light 
        uppercase 
        tracking-[0.2em] 
      text-white
        drop-shadow-md 
        transition-opacity 
        group-hover:opacity-90
      `}>
        {collection.title}
      </h3>
    </div>
  </Link>
);

export default function CoutureCollections() {
  return (
    // Background color set to match the pinkish tint in the screenshot
    <section className="bg-[#fdf2f2] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto font-inknut">

        {/* Main Section Heading */}
        <h2 className="mb-10 text-center text-3xl font-normal uppercase tracking-[0.25em] text-[#E01A69]">
          Casual And Comfort Coutre
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {collections.map((collection) => (
            <CategoryTile key={collection.id} collection={collection} />
          ))}
        </div>

      </div>
    </section>
  );
}