import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full">

            <Image
                src="/images/home/home-hero.png" // Ensure this path is correct in your public folder
                alt="Spring Summer Collection Hero"
                width={1920}
                height={1080}
                priority // Critical for LCP: tells the browser to load this immediately
                quality={90}
                className="w-full h-auto object-cover object-top"
                sizes="100vw"
            />

            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </section>
    );
}