import React from 'react';
import { Restaurant } from '../data/restaurantData';
import { Star, MapPin, Heart } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onViewDetails: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  isFavorite: boolean;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onViewDetails, onToggleFavorite, isFavorite }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <button 
          onClick={() => onToggleFavorite(restaurant.id)}
          className={`absolute top-4 right-4 p-2 rounded-full ${isFavorite ? 'bg-red-500' : 'bg-white'} shadow-lg transition-all`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'text-white fill-white' : 'text-gray-600'}`} />
        </button>
        {restaurant.featured && (
          <div className="absolute top-4 left-4 bg-[#8B1538] text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{restaurant.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block bg-[#F5F1E8] text-[#8B1538] px-3 py-1 rounded-full text-sm font-medium">{restaurant.cuisine}</span>
          <span className="text-gray-600 text-sm">{restaurant.priceRange}</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-[#2C2C2C]">{restaurant.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{restaurant.distance}</span>
        </div>
        <button 
          onClick={() => onViewDetails(restaurant.id)}
          className="w-full bg-[#8B1538] text-white py-2 rounded-lg font-semibold hover:bg-[#6B1028] transition-colors"
        >
          View Details & Book
        </button>
      </div>
    </div>
  );
};
