import React from 'react';
import { X } from 'lucide-react';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCuisines: string[];
  onCuisineToggle: (cuisine: string) => void;
  selectedPriceRanges: string[];
  onPriceRangeToggle: (range: string) => void;
  minRating: number;
  onRatingChange: (rating: number) => void;
  onClearFilters: () => void;
}

const cuisines = ['French', 'Japanese', 'Italian', 'Indian', 'American', 'Thai', 'Mediterranean', 'Chinese', 'Mexican'];
const priceRanges = ['$', '$$', '$$$', '$$$$'];

export const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  onClose,
  selectedCuisines,
  onCuisineToggle,
  selectedPriceRanges,
  onPriceRangeToggle,
  minRating,
  onRatingChange,
  onClearFilters,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#2C2C2C]">Filters</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Cuisine Type</h3>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                onClick={() => onCuisineToggle(cuisine)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCuisines.includes(cuisine)
                    ? 'bg-[#8B1538] text-white'
                    : 'bg-[#F5F1E8] text-[#2C2C2C] hover:bg-gray-200'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Price Range</h3>
          <div className="flex gap-2">
            {priceRanges.map((range) => (
              <button
                key={range}
                onClick={() => onPriceRangeToggle(range)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedPriceRanges.includes(range)
                    ? 'bg-[#8B1538] text-white'
                    : 'bg-[#F5F1E8] text-[#2C2C2C] hover:bg-gray-200'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Minimum Rating: {minRating}+</h3>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => onRatingChange(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex gap-3">
          <button onClick={onClearFilters} className="flex-1 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50">
            Clear All
          </button>
          <button onClick={onClose} className="flex-1 py-3 bg-[#8B1538] text-white rounded-lg font-semibold hover:bg-[#6B1028]">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
