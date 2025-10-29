import React from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  onToggleFilters: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  location, 
  onLocationChange,
  onToggleFilters 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col md:flex-row gap-4">
      <div className="flex-1 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search restaurants, cuisines..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
      <div className="flex-1 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
        <MapPin className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
      <button 
        onClick={onToggleFilters}
        className="flex items-center justify-center gap-2 bg-[#8B1538] text-white px-6 py-3 rounded-xl hover:bg-[#6B1028] transition-colors font-semibold"
      >
        <SlidersHorizontal className="w-5 h-5" />
        Filters
      </button>
    </div>
  );
};
