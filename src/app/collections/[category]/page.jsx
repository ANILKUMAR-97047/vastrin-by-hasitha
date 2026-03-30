import React from 'react';
import { notFound } from 'next/navigation';
import CollectionLayout from '../../components/collection/CollectionLayout';
import { collectionsData } from '@/app/data/collectionsData';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const data = collectionsData[resolvedParams.category];
    if (!data) return { title: 'Collection Not Found' };
    return { title: `${data.title} | Vastrin By Hasitha` };
}

export default async function CollectionPage({ params }) {
    // Next.js 15 requires awaiting dynamic route params before usage!
    const resolvedParams = await params;
    const data = collectionsData[resolvedParams.category];

    // If param does not match our mock keys, trigger native 404 page
    if (!data) {
        notFound();
    }

    return (
        <CollectionLayout
            title={data.title}
            products={data.products}
            breadcrumbs={data.breadcrumbs}
            seoParagraphs={data.seoParagraphs}
        />
    );
}
