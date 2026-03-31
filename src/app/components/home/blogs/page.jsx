import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    category: 'A COLOR GUIDE TO ETHNIC WEAR',
    title: 'Choosing the Perfect Wedding Guest Colors: A Simple Style Guide',
    excerpt: 'Picking the perfect wedding outfit is always fun—you want to look stylish without overshadowing the bride and groom. But the biggest question most guests have is...',
    image: '/images/home/blogs/image-1.png',
    overlayTitle: 'The Perfect Wedding Guest Colors: A Simple Style Guide',
  },
  {
    id: 2,
    category: 'ANARKALI KURTI',
    title: 'Choosing the Perfect Wedding Guest Colors: A Simple Style Guide',
    excerpt: 'Picking the perfect wedding outfit is always fun—you want to look stylish without overshadowing the bride and groom. But the biggest question most guests have is...',
    image: '/images/home/blogs/image-2.png',
    overlayTitle: "Top Ethnic Wear Styles Defining Today's Fashion",
  },
  {
    id: 3,
    category: 'CASUAL ETHNIC WEAR',
    title: 'Choosing the Perfect Wedding Guest Colors: A Simple Style Guide',
    excerpt: 'Picking the perfect wedding outfit is always fun—you want to look stylish without overshadowing the bride and groom. But the biggest question most guests have is...',
    image: '/images/home/blogs/image-3.png',
    overlayTitle: 'Understanding Gen Z Fashion: The Trends Shaping Today',
  },
];

export default function BlogPosts() {
  return (
    <section className="bg-[#fdf2f2] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-center font-serif text-4xl md:text-5xl lg:text-[32px] font-bold uppercase tracking-[0.2em] text-[#FC6C85] mb-16">
          Blog Posts
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-inknut">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image Header with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                {/* Dark Gradient Overlay for the text on image */}
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h4 className="text-white font-serif text-lg md:text-xl font-medium leading-tight">
                    {blog.overlayTitle}
                  </h4>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-4">
                <span className="text-[10px] md:text-xs tracking-[0.15em] text-gray-400 uppercase font-medium">
                  {blog.category}
                </span>

                <h3 className="text-xl md:text-2xl lg:text-[24px] font-inknut font-bold text-gray-800 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block text-blue-600 font-bold text-sm hover:underline transition-all"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <button className="bg-[#FC6C85] text-white px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 cursor-pointer">
            View All
          </button>
        </div>

      </div>
    </section>
  );
}