export const mockImages = [
  '/images/home/fresh-drop/image-1.png',
  '/images/home/flat-fifty/image-2.png',
  '/images/home/flat-fifty/image-3.png',
  '/images/home/flat-fifty/image-4.png',
];

export const generateProducts = (count = 12) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    image: mockImages[i % mockImages.length],
    title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
    price: '999.00',
    originalPrice: '1,900.00',
    discount: 'SAVE 50%',
  }));
};

export const collectionsData = {
  'kurti-sets': {
    slug: 'kurti-sets',
    title: 'KURTI SETS',
    breadcrumbs: 'HOME / SHOP / KURTI SETS',
    products: generateProducts(16),
    seoParagraphs: [
      "Kurti sets are the perfect blend of tradition, comfort, and effortless style—making them a wardrobe essential for every woman. Thoughtfully designed to offer a flattering fit, each set pairs a stylish kurti with coordinated bottoms, creating a complete and polished look without the effort of mixing and matching.",
      "At Vastrin by Hasitha, our kurti sets feature curated fabrics, patterns, and cuts—perfect for work, casual outings, family events, and celebrations. Style them with juttis for a classic look or add statement accessories for an elevated finish.",
      "Experience the charm, comfort, and timeless beauty of kurti sets—only at Vastrin by Hasitha."
    ]
  },
  'coord-sets': {
    slug: 'coord-sets',
    title: 'CO-ORD SETS',
    breadcrumbs: 'HOME / SHOP / CO-ORD SETS',
    products: generateProducts(16),
    seoParagraphs: [
      "Co-ord sets blend modern style, comfort, and effortless sophistication, making them a must-have in every woman's wardrobe. With perfectly matched top-and-bottom ensembles, they offer a chic, polished look without the need for mixing or matching—easy, stylish, and versatile.",
      "At Vastrin by Hasitha, our co-ord sets feature crafted fabrics and flattering silhouettes—perfect for brunches, office days, travel, and festive events. Choose minimal or bold styles, and finish your look with sneakers for comfort or heels for an elevated touch.",
      "Experience modern style and comfort with our curated co-ord sets.—only at Vastrin by Hasitha."
    ]
  },
  'best-sellers': {
    slug: 'best-sellers',
    title: 'BEST SELLERS',
    breadcrumbs: 'HOME / SHOP / BEST SELLERS',
    products: generateProducts(16), // Mock
    seoParagraphs: [
      "Our Best Sellers bring together timeless style, comfort, and contemporary elegance—featuring the outfits customers love the most. Each piece stands out for its refined cuts, premium fabrics, and flattering silhouettes, giving you a polished, effortlessly stylish look for any occasion.",
      "Our best sellers suit brunches, office days, travel, and festive moments—offering comfort, versatility, and elevated style in both minimal and bold designs.",
      "Explore best-loved styles with effortless elegance at Vastrin by Hasitha."
    ]
  },
  'special-category': {
    slug: 'special-category',
    title: 'SPECIAL CATEGORY',
    breadcrumbs: 'HOME / SHOP / SPECIAL CATEGORY',
    products: generateProducts(16), // Mock
    seoParagraphs: [
      "Our Special Category offers curated styles with timeless design, luxurious comfort, and refined craftsmanship. Each outfit features rich fabrics and flattering silhouettes for a polished, sophisticated look on any occasion.",
      "These exclusive styles are ideal for festive celebrations, family gatherings, office events, travel plans, and special moments—offering the perfect mix of versatility and elegance in both minimal and bold designs.",
      "Discover unique, handpicked pieces that make every look feel special—only at Vastrin by Hasitha."
    ]
  }
};
