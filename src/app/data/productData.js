import { mockImages } from './collectionsData';

export const getProductDetails = (productId) => {
    // Generate an extended mock product based on productId
    const idNum = parseInt(productId, 10) || 1;
    const priceValue = 500 + (((idNum - 1) * 137) % 2500);
    const mainImage = mockImages[(idNum - 1) % mockImages.length];
    
    // Pick 3 fallback images for the gallery
    const galleryImages = [
        mainImage,
        mockImages[(idNum + 1) % mockImages.length],
        mockImages[(idNum + 2) % mockImages.length],
        mockImages[(idNum + 3) % mockImages.length],
    ];

    return {
        id: idNum,
        brand: 'VASTRIN BY HASITHA',
        title: 'AAMI DESIGNER WOMEN\'S RAYON VISCOSE STRAIGHT SOLID KURTA WITH PANT AND DUPATTA',
        discount: 'SAVE 69%',
        price: priceValue.toFixed(2),
        originalPrice: (priceValue * 3.22).toFixed(2), // roughly 69% discount
        rating: 5,
        reviewCount: 3075,
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        colors: [
            { name: 'BLACK', hex: '#000000' },
            { name: 'OLIVE', hex: '#6b8e23' },
            { name: 'PINK', hex: '#ff69b4' }
        ],
        about: [
            'Premium Cotton Fabric – Soft, breathable, and perfect for all-day wear.',
            'Elegant Embroidery Work – Intricate detailing adds a rich, ethnic charm.',
            'Anarkali Kurti Design – Flared silhouette that flatters all body types.',
            'Perfect for All Occasions – Ideal for festive events, pujas, or casual gatherings.',
            'Easy to Wash & Maintain – Colorfast and durable; machine or hand washable.'
        ],
        details: {
            'Generic Name': 'Anarkali set',
            'Pattern': 'Solid',
            'Fit type': 'Regular Fit',
            'Sleeve type': '3/4 Sleeve',
            'Collar style': 'Classic collar',
            'Neck style': 'Round Neck',
            'Manufacturer': 'Vastrin By hasitha',
            'Item Weight': '210 g',
            'Item Dimensions LxWxH': '19 x 17.5 x 3 Centimeters',
            'Net Quantity': '1 Count',
            'Material Type': 'Cotton Blend'
        },
        reviews: [
            {
                id: 1,
                name: 'Anjali Reddy',
                date: 'March 18, 2024',
                rating: 5,
                text: 'Loved the color and design. Got many compliments at the wedding. Fast delivery too!'
            },
            {
                id: 2,
                name: 'Anjali Reddy',
                date: 'March 15, 2024',
                rating: 5,
                text: 'Loved the color and design. Got many compliments at the wedding. Fast delivery too!'
            },
            {
                id: 3,
                name: 'Anjali Reddy',
                date: 'March 8, 2024',
                rating: 5,
                text: 'Loved the color and design. Got many compliments at the wedding. Fast delivery too!'
            }
        ],
        galleryImages,
        mainImage
    };
};
