export const mockImages = [
  '/images/home/fresh-drop/image-1.png',
  '/images/home/flat-fifty/image-2.png',
  '/images/home/flat-fifty/image-3.png',
  '/images/home/flat-fifty/image-4.png',
];

export const generateProducts = (count = 125) => {
  return Array.from({ length: count }).map((_, i) => {
    // Generate a pseudo-random price between 500 and 3000 based on index to allow realistic sorting
    const priceValue = 500 + ((i * 137) % 2500); 
    return {
      id: i + 1,
      image: mockImages[i % mockImages.length],
      title: 'KLOSIA WOMEN EMBROIDERY KURTA AND PANT SET WITH DUPATAA',
      price: priceValue.toFixed(2),
      originalPrice: (priceValue * 1.5).toFixed(2), // roughly 33% discount
      discount: 'SAVE 33%',
      priceNum: priceValue, // raw number for easy sorting state comparisons
    };
  });
};

export const collectionsData = {
  'kurti-sets': {
    slug: 'kurti-sets',
    title: 'KURTI SETS',
    breadcrumbs: 'HOME / SHOP / DRESSES',
    products: generateProducts(125),
    seoParagraphs: [
      "Kurti sets are the perfect blend of tradition, comfort, and effortless style—making them a wardrobe essential for every woman. Thoughtfully designed to offer a flattering fit, each set pairs a stylish kurti with coordinated bottoms, creating a complete and polished look without the effort of mixing and matching.",
      "At Vastrin by Hasitha, our kurti sets feature curated fabrics, patterns, and cuts—perfect for work, casual outings, family events, and celebrations. Style them with juttis for a classic look or add statement accessories for an elevated finish.",
      "Experience the charm, comfort, and timeless beauty of kurti sets—only at Vastrin by Hasitha."
    ]
  },
  'coord-sets': {
    slug: 'coord-sets',
    title: 'CO-ORD SETS',
    breadcrumbs: 'HOME / SHOP / DRESSES',
    products: generateProducts(125),
    seoParagraphs: [
      "Co-ord sets blend modern style, comfort, and effortless sophistication, making them a must-have in every woman's wardrobe. With perfectly matched top-and-bottom ensembles, they offer a chic, polished look without the need for mixing or matching—easy, stylish, and versatile.",
      "At Vastrin by Hasitha, our co-ord sets feature crafted fabrics and flattering silhouettes—perfect for brunches, office days, travel, and festive events. Choose minimal or bold styles, and finish your look with sneakers for comfort or heels for an elevated touch.",
      "Experience modern style and comfort with our curated co-ord sets.—only at Vastrin by Hasitha."
    ]
  },
  'best-sellers': {
    slug: 'best-sellers',
    title: 'BEST SELLERS',
    breadcrumbs: 'HOME / SHOP / DRESSES',
    products: generateProducts(125),
    seoParagraphs: [
      "Our Best Sellers bring together timeless style, comfort, and contemporary elegance—featuring the outfits customers love the most. Each piece stands out for its refined cuts, premium fabrics, and flattering silhouettes, giving you a polished, effortlessly stylish look for any occasion.",
      "Our best sellers suit brunches, office days, travel, and festive moments—offering comfort, versatility, and elevated style in both minimal and bold designs.",
      "Explore best-loved styles with effortless elegance at Vastrin by Hasitha."
    ]
  },
  'special-category': {
    slug: 'special-category',
    title: 'SPECIAL CATEGORY',
    breadcrumbs: 'HOME / SHOP / DRESSES',
    products: generateProducts(125),
    seoParagraphs: [
      "Our Special Category offers curated styles with timeless design, luxurious comfort, and refined craftsmanship. Each outfit features rich fabrics and flattering silhouettes for a polished, sophisticated look on any occasion.",
      "These exclusive styles are ideal for festive celebrations, family gatherings, office events, travel plans, and special moments—offering the perfect mix of versatility and elegance in both minimal and bold designs.",
      "Discover unique, handpicked pieces that make every look feel special—only at Vastrin by Hasitha."
    ]
  }
};
