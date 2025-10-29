export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  distance: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  interiorImage: string;
  description: string;
  featured: boolean;
}

export const restaurants: Restaurant[] = [
  { id: 1, name: "La Maison Rouge", cuisine: "French", rating: 4.8, reviewCount: 342, priceRange: "$$$", distance: "0.8 mi", address: "123 Elm St", phone: "(555) 123-4567", hours: "5PM - 11PM", image: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744378237_b87975c1.webp", interiorImage: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744399868_79d82ae6.webp", description: "Authentic French cuisine", featured: true },
  { id: 2, name: "Sakura Sushi", cuisine: "Japanese", rating: 4.9, reviewCount: 521, priceRange: "$$", distance: "1.2 mi", address: "456 Oak Ave", phone: "(555) 234-5678", hours: "12PM - 10PM", image: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744380562_30632136.webp", interiorImage: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744401671_da343e5e.webp", description: "Fresh sushi daily", featured: true },
  { id: 3, name: "Trattoria Bella", cuisine: "Italian", rating: 4.7, reviewCount: 289, priceRange: "$$$", distance: "0.5 mi", address: "789 Pine Rd", phone: "(555) 345-6789", hours: "11AM - 11PM", image: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744383825_f96f4e9a.webp", interiorImage: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744403459_461b8794.webp", description: "Traditional Italian", featured: false },
  { id: 4, name: "Spice Route", cuisine: "Indian", rating: 4.6, reviewCount: 412, priceRange: "$$", distance: "2.1 mi", address: "321 Maple Dr", phone: "(555) 456-7890", hours: "11AM - 10PM", image: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744386220_7a3dc91c.webp", interiorImage: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744405222_e09ec963.webp", description: "Authentic Indian spices", featured: false },
  { id: 5, name: "The Steakhouse", cuisine: "American", rating: 4.8, reviewCount: 678, priceRange: "$$$$", distance: "1.5 mi", address: "654 Cedar Ln", phone: "(555) 567-8901", hours: "5PM - 12AM", image: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744388386_ecbbe027.webp", interiorImage: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744407024_e8319dce.webp", description: "Premium aged steaks", featured: true },
  { id: 6, name: "Thai Orchid", cuisine: "Thai", rating: 4.5, reviewCount: 234, priceRange: "$$", distance: "1.8 mi", address: "987 Birch St", phone: "(555) 678-9012", hours: "11AM - 9PM", image: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744390191_e1bf4f06.webp", interiorImage: "https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744409922_89ee7260.webp", description: "Authentic Thai flavors", featured: false },
];
