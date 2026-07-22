import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onNavigate }) => {
  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-[#FF6B00] text-white rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-6 z-20 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-[#FF6B00] text-white rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 z-20 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-[#FF6B00] text-white rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Content */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="max-w-4xl max-h-[85vh] flex flex-col items-center"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
          />
          <div className="mt-4 text-center text-white space-y-1 max-w-xl">
            <span className="text-xs font-semibold uppercase text-[#FF6B00] tracking-widest">
              {item.category}
            </span>
            <h3 className="text-xl font-serif font-bold">{item.title}</h3>
            <p className="text-xs text-gray-300">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
