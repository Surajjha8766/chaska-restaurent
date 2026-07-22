import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { WhatsAppButton, BackToTop } from './components/WhatsAppButton';
import { FoodModal } from './components/FoodModal';
import { OrderDrawer } from './components/OrderDrawer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ReservationPage } from './pages/ReservationPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { MenuItem, OrderItem } from './types';

// ScrollToTop Helper Component on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('chaska_theme');
    return saved ? saved === 'dark' : false;
  });

  const [selectedFoodItem, setSelectedFoodItem] = useState<MenuItem | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItem[]>(() => {
    const saved = localStorage.getItem('chaska_order');
    return saved ? JSON.parse(saved) : [];
  });
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('chaska_order', JSON.stringify(orderItems));
  }, [orderItems]);

  const toggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    localStorage.setItem('chaska_theme', nextTheme ? 'dark' : 'light');
  };

  const handleAddToOrder = (item: MenuItem, qty: number = 1) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { item, quantity: qty }];
    });
  };

  const handleUpdateQty = (itemId: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as OrderItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const orderItemIds = orderItems.map((i) => i.item.id);
  const totalOrderCount = orderItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen />

      <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDarkMode ? 'dark bg-[#0D0D0D] text-white' : 'bg-[#F8F8F8] text-[#111111]'}`}>
        
        {/* Navigation */}
        <Navbar
          orderCount={totalOrderCount}
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home onSelectItem={(item) => setSelectedFoodItem(item)} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/menu"
              element={
                <MenuPage
                  onSelectItem={(item) => setSelectedFoodItem(item)}
                  onAddToOrder={handleAddToOrder}
                  orderItemIds={orderItemIds}
                />
              }
            />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Modals & Drawers */}
        <FoodModal
          item={selectedFoodItem}
          onClose={() => setSelectedFoodItem(null)}
          onAddToOrder={handleAddToOrder}
        />

        <OrderDrawer
          isOpen={isOrderDrawerOpen}
          onClose={() => setIsOrderDrawerOpen(false)}
          items={orderItems}
          onUpdateQty={handleUpdateQty}
          onRemoveItem={handleRemoveItem}
          onClear={handleClearOrder}
        />

        {/* Floating Utility Widgets */}
        <WhatsAppButton />
        <BackToTop />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
