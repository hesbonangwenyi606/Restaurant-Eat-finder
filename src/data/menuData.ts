export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export const menusByRestaurant: Record<number, MenuItem[]> = {
  1: [
    { id: 1, name: "Coq au Vin", description: "Braised chicken in red wine sauce", price: 32, category: "Mains" },
    { id: 2, name: "Bouillabaisse", description: "Traditional Provençal fish stew", price: 38, category: "Mains" },
    { id: 3, name: "Crème Brûlée", description: "Classic vanilla custard", price: 12, category: "Desserts" },
    { id: 4, name: "French Onion Soup", description: "Caramelized onions, gruyère", price: 14, category: "Starters" },
  ],
  2: [
    { id: 5, name: "Omakase", description: "Chef's selection of 12 pieces", price: 85, category: "Sushi" },
    { id: 6, name: "Dragon Roll", description: "Eel, avocado, cucumber", price: 18, category: "Sushi" },
    { id: 7, name: "Miso Soup", description: "Traditional soybean soup", price: 6, category: "Starters" },
    { id: 8, name: "Tempura", description: "Assorted vegetables and shrimp", price: 16, category: "Starters" },
  ],
};

export const reviewsByRestaurant: Record<number, Review[]> = {
  1: [
    { id: 1, userName: "Sarah M.", rating: 5, date: "2 days ago", comment: "Absolutely incredible! The Coq au Vin was perfection.", avatar: "SM" },
    { id: 2, userName: "James K.", rating: 5, date: "1 week ago", comment: "Best French restaurant in the city. Authentic and delicious.", avatar: "JK" },
    { id: 3, userName: "Emily R.", rating: 4, date: "2 weeks ago", comment: "Great ambiance and service. Slightly pricey but worth it.", avatar: "ER" },
  ],
  2: [
    { id: 4, userName: "Michael T.", rating: 5, date: "3 days ago", comment: "The freshest sushi I've ever had. Omakase is a must-try!", avatar: "MT" },
    { id: 5, userName: "Lisa P.", rating: 5, date: "5 days ago", comment: "Outstanding quality and presentation. Will definitely return.", avatar: "LP" },
  ],
};
