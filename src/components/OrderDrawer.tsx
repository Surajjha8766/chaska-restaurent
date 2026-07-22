import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, CalendarCheck, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { OrderItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  onUpdateQty: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClear: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClear
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const handleBookWithOrder = () => {
    onClose();
    navigate('/reservation', { state: { preOrders: items } });
  };

  const handleSendWhatsAppOrder = () => {
    const listText = items.map(i => `• ${i.item.name} x${i.quantity} (₹${i.item.price * i.quantity})`).join('%0A');
    const msg = `Hello Chaska Restaurant,%0A%0AI would like to place an estimated order enquiry:%0A${listText}%0A%0ATotal Estimated Amount: ₹${totalAmount}%0A%0APlease confirm availability & dining timing.`;
    window.open(`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm">
        <div className="absolute inset-0" onClick={onClose} />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#111111] text-white border-l border-white/10 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-xl text-[#FF6B00]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white font-bold">Estimated Order</h3>
                  <p className="text-xs text-gray-400">{items.length} items selected</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                  <ShoppingBag className="w-16 h-16 text-gray-600 mb-4 stroke-1" />
                  <p className="text-base font-semibold text-gray-300">Your order list is empty</p>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs">
                    Browse our luxury menu and select your favorite dishes to estimate your bill or pre-order for table reservation.
                  </p>
                </div>
              ) : (
                items.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 bg-[#1A1A1A] border border-white/5 rounded-xl hover:border-[#FF6B00]/30 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
                        <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                      </div>
                      <p className="text-xs text-[#FF6B00] font-bold mt-0.5">₹{item.price * quantity}</p>
                      
                      {/* Quantity modifier */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-white/20 rounded-lg bg-[#111111] px-1">
                          <button
                            onClick={() => onUpdateQty(item.id, -1)}
                            className="p-1 text-gray-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-white">{quantity}</span>
                          <button
                            onClick={() => onUpdateQty(item.id, 1)}
                            className="p-1 text-gray-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-500 hover:text-red-400 text-xs flex items-center gap-1 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Actions */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#151515] space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Estimated Taxes & Charges</span>
                    <span className="text-green-400">Calculated at venue</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                    <span>Estimated Total</span>
                    <span className="text-[#FF6B00]">₹{totalAmount}</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={handleBookWithOrder}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-semibold rounded-xl transition-colors shadow-lg shadow-[#FF6B00]/20"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Reserve Table with Pre-Order
                  </button>

                  <button
                    onClick={handleSendWhatsAppOrder}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Order Inquiry on WhatsApp
                  </button>

                  <button
                    onClick={onClear}
                    className="w-full py-1.5 text-xs text-gray-400 hover:text-red-400 transition-colors text-center"
                  >
                    Clear All Selected Items
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
