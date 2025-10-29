import React, { useState, useMemo } from 'react';
import { restaurants } from '../data/restaurantData';
import { moreRestaurants } from '../data/extendedRestaurants';
import { RestaurantCard } from './RestaurantCard';
import { SearchBar } from './SearchBar';
import { FilterPanel } from './FilterPanel';
import { ReservationModal } from './ReservationModal';
import { RestaurantDetail } from './RestaurantDetail';
import { Utensils, Award, TrendingUp } from 'lucide-react';

export default function AppLayout() {
  const allRestaurants = [...restaurants, ...moreRestaurants];
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('New York, NY');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<typeof allRestaurants[0] | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [reservationRestaurant, setReservationRestaurant] = useState('');

  const filteredRestaurants = useMemo(() => {
    return allRestaurants.filter((r) => {
      const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           r.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCuisine = selectedCuisines.length === 0 || selectedCuisines.includes(r.cuisine);
      const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.includes(r.priceRange);
      const matchesRating = r.rating >= minRating;
      return matchesSearch && matchesCuisine && matchesPrice && matchesRating;
    });
  }, [searchTerm, selectedCuisines, selectedPriceRanges, minRating]);

  const handleViewDetails = (id: number) => {
    const restaurant = allRestaurants.find((r) => r.id === id);
    setSelectedRestaurant(restaurant || null);
    setShowDetail(true);
  };

  const handleBookTable = () => {
    setReservationRestaurant(selectedRestaurant?.name || '');
    setShowDetail(false);
    setShowReservation(true);
  };

  const handleConfirmReservation = (details: any) => {
    alert(`Reservation confirmed for ${details.guests} guests on ${details.date} at ${details.time}!`);
    setShowReservation(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/690215c69ba901ad836d5fd0_1761744376834_d34bb73a.webp)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Discover Your Next Favorite Restaurant</h1>
          <p className="text-xl text-white mb-8">Explore menus, read reviews, and book tables instantly</p>
          <div className="w-full max-w-4xl">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              location={location}
              onLocationChange={setLocation}
              onToggleFilters={() => setShowFilters(true)}
            />
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Award className="w-12 h-12 text-[#8B1538] mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Top Rated</h3>
            <p className="text-gray-600">Highest rated restaurants in your area</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <TrendingUp className="w-12 h-12 text-[#8B1538] mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Trending Now</h3>
            <p className="text-gray-600">What's hot in the food scene</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Utensils className="w-12 h-12 text-[#8B1538] mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">New Openings</h3>
            <p className="text-gray-600">Recently opened restaurants</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6">
          {filteredRestaurants.length} Restaurants Found
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onViewDetails={handleViewDetails}
              onToggleFavorite={(id) => setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])}
              isFavorite={favorites.includes(restaurant.id)}
            />
          ))}
        </div>
      </div>

      <FilterPanel
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        selectedCuisines={selectedCuisines}
        onCuisineToggle={(c) => setSelectedCuisines(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])}
        selectedPriceRanges={selectedPriceRanges}
        onPriceRangeToggle={(p) => setSelectedPriceRanges(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])}
        minRating={minRating}
        onRatingChange={setMinRating}
        onClearFilters={() => { setSelectedCuisines([]); setSelectedPriceRanges([]); setMinRating(0); }}
      />

      <RestaurantDetail
        restaurant={selectedRestaurant}
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        onBookTable={handleBookTable}
      />

      <ReservationModal
        isOpen={showReservation}
        onClose={() => setShowReservation(false)}
        restaurantName={reservationRestaurant}
        onConfirm={handleConfirmReservation}
      />
    </div>
  );
}
