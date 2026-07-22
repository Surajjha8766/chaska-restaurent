import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Utensils, ShoppingBag, Menu as MenuIcon, X, Calendar, Sun, Moon } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  orderCount: number;
  onOpenOrderDrawer: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  orderCount,
  onOpenOrderDrawer,
  isDarkMode,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3 text-white'
          : isHome
          ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
          : 'bg-[#111111] py-4 text-white border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white shadow-lg shadow-[#FF6B00]/30 transition-transform duration-300 group-hover:scale-105">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <span className="text-2xl font-serif font-black tracking-widest text-white uppercase block leading-none">
              CHASKA<span className="text-[#FF6B00]">.</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gray-300 block mt-1 font-semibold">
              RESTAURANT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#FF6B00] font-semibold'
                    : 'text-gray-200 hover:text-[#FF6B00]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B00] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-300" />}
          </button>

          {/* Cart / Order Estimator */}
          <button
            onClick={onOpenOrderDrawer}
            aria-label="View Order Estimate"
            className="relative p-2.5 rounded-full bg-white/10 hover:bg-[#FF6B00] text-white transition-colors group"
          >
            <ShoppingBag className="w-5 h-5" />
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF6B00] group-hover:bg-white group-hover:text-[#FF6B00] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-[#111111]">
                {orderCount}
              </span>
            )}
          </button>

          {/* Call Now Button */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 text-xs font-bold tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
            Call Now
          </a>

          {/* Reserve Table Button */}
          <Link
            to="/reservation"
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wider text-white bg-[#FF6B00] hover:bg-[#e05e00] rounded-xl transition-all shadow-lg shadow-[#FF6B00]/25 hover:shadow-xl"
          >
            <Calendar className="w-3.5 h-3.5" />
            Reserve Table
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenOrderDrawer}
            aria-label="Order drawer"
            className="relative p-2 rounded-lg bg-white/10 text-white"
          >
            <ShoppingBag className="w-5 h-5" />
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B00] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#111111] border-b border-white/10 p-6 shadow-2xl flex flex-col space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium py-2 border-b border-white/5 ${
                  location.pathname === link.path ? 'text-[#FF6B00] font-bold' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col space-y-3">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 text-white font-semibold rounded-xl text-sm border border-white/20"
            >
              <Phone className="w-4 h-4 text-[#FF6B00]" />
              Call Now ({RESTAURANT_INFO.phone})
            </a>

            <Link
              to="/reservation"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FF6B00] text-white font-semibold rounded-xl text-sm shadow-lg shadow-[#FF6B00]/30"
            >
              <Calendar className="w-4 h-4" />
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
