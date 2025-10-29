import React from 'react';
import { X, Star, MapPin, Phone, Clock } from 'lucide-react';
import { Restaurant } from '../data/restaurantData';
import { menusByRestaurant, reviewsByRestaurant } from '../data/menuData';

interface RestaurantDetailProps {
  restaurant: Restaurant | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTable: () => void;
}

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, isOpen, onClose, onBookTable }) => {
  if (!isOpen || !restaurant) return null;

  const menu = menusByRestaurant[restaurant.id] || [];
  const reviews = reviewsByRestaurant[restaurant.id] || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative h-80">
            <img src={restaurant.interiorImage} alt={restaurant.name} className="w-full h-full object-cover" />
            <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold text-[#2C2C2C] mb-2">{restaurant.name}</h1>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#F5F1E8] text-[#8B1538] px-3 py-1 rounded-full text-sm font-medium">{restaurant.cuisine}</span>
                  <span className="text-gray-600">{restaurant.priceRange}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{restaurant.rating}</span>
                  <span className="text-gray-500">({restaurant.reviewCount} reviews)</span>
                </div>
              </div>
              <button onClick={onBookTable} className="bg-[#8B1538] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6B1028]">
                Book Table
              </button>
            </div>

            <p className="text-gray-700 mb-6">{restaurant.description}</p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-[#8B1538]" />
                <span>{restaurant.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-[#8B1538]" />
                <span>{restaurant.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-[#8B1538]" />
                <span>{restaurant.hours}</span>
              </div>
            </div>

            {menu.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4">Menu</h2>
                <div className="space-y-4">
                  {menu.map((item) => (
                    <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="font-semibold text-[#8B1538]">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {reviews.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4">Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#8B1538] text-white rounded-full flex items-center justify-center font-semibold">
                          {review.avatar}
                        </div>
                        <div>
                          <p className="font-semibold">{review.userName}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <div className="ml-auto flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
