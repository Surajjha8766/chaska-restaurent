import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Flame, Award, Star, Plus, Minus, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface FoodModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToOrder: (item: MenuItem, qty: number) => void;
}

export const FoodModal: React.FC<FoodModalProps> = ({ item, onClose, onAddToOrder }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    onAddToOrder(item, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#111111] text-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 bg-black/50 hover:bg-[#FF6B00] text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Banner */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            
            {/* Badges */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md ${
                item.isVeg ? 'bg-green-900/80 text-green-300 border border-green-500/30' : 'bg-red-900/80 text-red-300 border border-red-500/30'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-1.5 ${item.isVeg ? 'bg-green-400' : 'bg-red-500'}`}></span>
                {item.isVeg ? 'PURE VEG' : 'NON-VEG'}
              </span>

              {item.isChefSpecial && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-[#FF6B00] text-white rounded-md">
                  <Award className="w-3.5 h-3.5" /> CHEF SPECIAL
                </span>
              )}

              {item.isSpicy && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-red-600 text-white rounded-md">
                  <Flame className="w-3.5 h-3.5" /> SPICY
                </span>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium tracking-widest text-[#FF6B00] uppercase">
                  {item.category}
                </span>
                <h3 className="text-2xl font-serif text-white font-bold mt-1">{item.name}</h3>
              </div>
              <div className="text-2xl font-bold text-[#FF6B00]">₹{item.price}</div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>

            {item.rating && (
              <div className="flex items-center gap-1.5 text-amber-400 text-sm font-semibold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{item.rating} / 5.0 Rating</span>
              </div>
            )}

            {/* Quantity and Add Button */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center border border-white/20 rounded-xl bg-[#1A1A1A]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-l-xl"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-r-xl"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                disabled={added}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#FF6B00]/20"
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    Added to Estimate
                  </>
                ) : (
                  <>Add to Estimate (₹{item.price * quantity})</>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
