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
      "Kurti Sets, A-Line Kurtis, Straight Kurtis, Anarkali Kurti Sets, Printed Kurti Sets, Festive Kurti Sets, Office Wear Kurtis, Daily Wear Kurtis, Cotton Kurti Sets, Rayon Kurti Sets, Co-ord Sets, Printed Co-ords, Casual Co-ords, Festive Co-ords, Indo-Western Co-ords, Travel-Friendly Co-ords, New Arrivals, Trending Styles, Best Sellers, Customer Favorites, Festive Wear Collection, Sale Offers, Under ₹999 Styles, Under ₹1499 Styles, Buy 1 Get 1 Deals, Clearance Sale Collection, Party Wear Outfits, Workwear Styles, Brunch Outfits, Travel Wear Collection, Pastel Collection, Black Edit, Pink Edit, Premium Ethnic Sets, Limited Edition Styles."
    ]
  },
  'coord-sets': {
    slug: 'coord-sets',
    title: 'CO-ORD SETS',
    breadcrumbs: 'HOME / SHOP / DRESSES',
    products: generateProducts(125),
    seoParagraphs: [
      "Kurti Sets, A-Line Kurtis, Straight Kurtis, Anarkali Kurti Sets, Printed Kurti Sets, Festive Kurti Sets, Office Wear Kurtis, Daily Wear Kurtis, Cotton Kurti Sets, Rayon Kurti Sets, Co-ord Sets, Printed Co-ords, Casual Co-ords, Festive Co-ords, Indo-Western Co-ords, Travel-Friendly Co-ords, New Arrivals, Trending Styles, Best Sellers, Customer Favorites, Festive Wear Collection, Sale Offers, Under ₹999 Styles, Under ₹1499 Styles, Buy 1 Get 1 Deals, Clearance Sale Collection, Party Wear Outfits, Workwear Styles, Brunch Outfits, Travel Wear Collection, Pastel Collection, Black Edit, Pink Edit, Premium Ethnic Sets, Limited Edition Styles."
    ]
  },
  'best-sellers': {
    slug: 'best-sellers',
    title: 'BEST SELLERS',
    breadcrumbs: 'HOME / SHOP / DRESSES',
    products: generateProducts(125),
    seoParagraphs: [
      "Kurti Sets, A-Line Kurtis, Straight Kurtis, Anarkali Kurti Sets, Printed Kurti Sets, Festive Kurti Sets, Office Wear Kurtis, Daily Wear Kurtis, Cotton Kurti Sets, Rayon Kurti Sets, Co-ord Sets, Printed Co-ords, Casual Co-ords, Festive Co-ords, Indo-Western Co-ords, Travel-Friendly Co-ords, New Arrivals, Trending Styles, Best Sellers, Customer Favorites, Festive Wear Collection, Sale Offers, Under ₹999 Styles, Under ₹1499 Styles, Buy 1 Get 1 Deals, Clearance Sale Collection, Party Wear Outfits, Workwear Styles, Brunch Outfits, Travel Wear Collection, Pastel Collection, Black Edit, Pink Edit, Premium Ethnic Sets, Limited Edition Styles."
    ]
  },
  'special-category': {
    slug: 'special-category',
    title: 'SPECIAL CATEGORY',
    breadcrumbs: 'HOME / SHOP / DRESSES',
    products: generateProducts(125),
    seoParagraphs: [
      "Kurti Sets, A-Line Kurtis, Straight Kurtis, Anarkali Kurti Sets, Printed Kurti Sets, Festive Kurti Sets, Office Wear Kurtis, Daily Wear Kurtis, Cotton Kurti Sets, Rayon Kurti Sets, Co-ord Sets, Printed Co-ords, Casual Co-ords, Festive Co-ords, Indo-Western Co-ords, Travel-Friendly Co-ords, New Arrivals, Trending Styles, Best Sellers, Customer Favorites, Festive Wear Collection, Sale Offers, Under ₹999 Styles, Under ₹1499 Styles, Buy 1 Get 1 Deals, Clearance Sale Collection, Party Wear Outfits, Workwear Styles, Brunch Outfits, Travel Wear Collection, Pastel Collection, Black Edit, Pink Edit, Premium Ethnic Sets, Limited Edition Styles."
    ]
  }
};
