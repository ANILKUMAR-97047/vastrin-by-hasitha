import React from 'react';
import Hero from './hero/page';
import FreshDrop from './fresh-drop/page';
import FlatFifty from './flat-fifty/page';
import CoOrdSets from './co-ord-sets/page';
import CoutureCollections from './casual-comfort/page';
import Newsletter from './news-letter/page';
import StoriesGallery from './stories-gallery/page';
import BlogPosts from './blogs/page';
import PopularSearches from './popular-searches/page';

export default function HomePage() {
    return (
        <div className="w-full">
            <Hero />
            <FreshDrop />
            <FlatFifty />
            <CoOrdSets />
            <CoutureCollections />
            <Newsletter />
            <StoriesGallery />
            <BlogPosts />
            <PopularSearches />
        </div>
    );
}