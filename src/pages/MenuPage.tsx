import React, { useState, useMemo } from 'react';
import { Search, Filter, Flame, Award, Star, Plus, Check } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuPageProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToOrder: (item: MenuItem, qty: number) => void;
  orderItemIds: string[];
}

export const MenuPage: React.FC<MenuPageProps> = ({
  onSelectItem,
  onAddToOrder,
  orderItemIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegFilter, setVegFilter] = useState<'All' | 'Veg' | 'NonVeg'>('All');
  const [sortBy, setSortBy] = useState<'default' | 'priceAsc' | 'priceDesc' | 'popular'>('default');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Main Course') {
          if (!item.category.includes('Main Course')) return false;
        } else if (selectedCategory === 'Rice & Biryani') {
          if (!['Rice & Biryani', 'Rice', 'Biryani'].includes(item.category)) return false;
        } else if (selectedCategory === 'Fried Rice & Noodles') {
          if (!['Fried Rice & Noodles', 'Fried Rice', 'Noodles'].includes(item.category)) return false;
        } else if (selectedCategory === 'Rolls & Snacks') {
          if (!['Rolls & Snacks', 'Rolls', 'Snacks', 'Fried Starters'].includes(item.category)) return false;
        } else if (selectedCategory === 'Desserts & Drinks') {
          if (!['Desserts & Drinks', 'Desserts', 'Drinks', 'Accompaniments'].includes(item.category)) return false;
        } else {
          if (!item.category.toLowerCase().includes(selectedCategory.toLowerCase())) return false;
        }
      }

      // Veg / Non-Veg filter
      if (vegFilter === 'Veg' && !item.isVeg) return false;
      if (vegFilter === 'NonVeg' && item.isVeg) return false;

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'popular') return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      return 0;
    });
  }, [selectedCategory, vegFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            Culinary Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Chaska Restaurant Menu
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
            Explore authentic North Indian, Tandoori, Mughlai, Chinese & Seafood delicacies. Select dishes to build your estimated order bill or pre-order for table reservation.
          </p>
        </div>
      </section>

      {/* Filter & Controls Toolbar */}
      <section className="sticky top-[70px] z-30 bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Top Row: Search & Veg Filter & Sorting */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Butter Chicken, Naan, Biryani..."
                className="w-full pl-10 pr-4 py-2 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-[#111111] placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-[#111111]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Veg / NonVeg Filter Toggle */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="flex bg-[#F8F8F8] p-1 rounded-xl border border-gray-200 text-xs font-medium w-full md:w-auto justify-center">
                <button
                  onClick={() => setVegFilter('All')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    vegFilter === 'All' ? 'bg-[#111111] text-white font-bold' : 'text-gray-600 hover:text-[#111111]'
                  }`}
                >
                  All Items
                </button>
                <button
                  onClick={() => setVegFilter('Veg')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    vegFilter === 'Veg' ? 'bg-green-600 text-white font-bold' : 'text-green-700 hover:bg-green-50'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500" /> Pure Veg
                </button>
                <button
                  onClick={() => setVegFilter('NonVeg')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    vegFilter === 'NonVeg' ? 'bg-red-600 text-white font-bold' : 'text-red-700 hover:bg-red-50'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" /> Non-Veg
                </button>
              </div>

              {/* Sort By Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-2 px-3 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-gray-700 focus:outline-none focus:border-[#FF6B00]"
              >
                <option value="default">Default Order</option>
                <option value="popular">Popular First</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Bottom Row: Category Horizontal Scroll Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/20 scale-105'
                    : 'bg-[#F8F8F8] text-gray-700 border border-gray-200 hover:bg-gray-200/80 hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Menu Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-gray-500 font-medium">
            Showing <strong className="text-[#111111]">{filteredItems.length}</strong> delicious dishes
          </p>
          {(selectedCategory !== 'All' || vegFilter !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setVegFilter('All');
                setSearchQuery('');
              }}
              className="text-xs text-[#FF6B00] font-bold hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-white border border-gray-200 rounded-2xl p-8">
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#111111]">No matching dishes found</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query, clearing filters or switching food preference tabs.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const isSelectedInOrder = orderItemIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Area */}
                    <div
                      className="relative h-48 overflow-hidden cursor-pointer"
                      onClick={() => onSelectItem(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 ${
                          item.isVeg ? 'border-green-600 bg-white' : 'border-red-600 bg-white'
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                        </span>

                        {item.isChefSpecial && (
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-[#FF6B00] text-white rounded shadow-sm flex items-center gap-1">
                            <Award className="w-3 h-3" /> Chef
                          </span>
                        )}

                        {item.isSpicy && (
                          <span className="px-2 py-0.5 text-[10px] font-bold bg-red-600 text-white rounded shadow-sm flex items-center gap-1">
                            <Flame className="w-3 h-3" /> Spicy
                          </span>
                        )}
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 text-xs font-black bg-[#111111]/90 backdrop-blur-md text-[#FF6B00] border border-white/20 rounded-lg">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>

                    {/* Body Text */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          onClick={() => onSelectItem(item)}
                          className="text-base font-serif font-bold text-[#111111] hover:text-[#FF6B00] cursor-pointer transition-colors leading-snug"
                        >
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between mt-3">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs font-semibold text-gray-500 hover:text-[#111111] transition-colors"
                    >
                      Details
                    </button>

                    <button
                      onClick={() => onAddToOrder(item, 1)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl transition-all shadow-sm ${
                        isSelectedInOrder
                          ? 'bg-green-600 text-white'
                          : 'bg-[#FF6B00] hover:bg-[#e05e00] text-white'
                      }`}
                    >
                      {isSelectedInOrder ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>

    </div>
  );
};
