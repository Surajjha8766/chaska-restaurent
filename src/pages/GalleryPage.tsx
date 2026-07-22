import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Lightbox } from '../components/Lightbox';
import { Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Interior', 'Dining', 'Food', 'Chef', 'Outdoor'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            Visual Experience
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Photo & Ambience Gallery
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
            Take a visual tour of our plush interior dining area, Amsterdam Street outdoor seating, open tandoori kitchen & signature food creations.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/25 scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="relative group rounded-2xl overflow-hidden bg-black cursor-pointer shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video sm:aspect-square overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="self-end p-2 bg-[#FF6B00] text-white rounded-full">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00]">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold">{item.title}</h3>
                  <p className="text-xs text-gray-300 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        item={selectedPhoto}
        items={filteredItems}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(newItem) => setSelectedPhoto(newItem)}
      />

    </div>
  );
};
