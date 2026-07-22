import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Phone, Clock, Mail, Instagram, Facebook, Send, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white shadow-lg shadow-[#FF6B00]/30">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl font-serif font-black tracking-widest text-white uppercase block leading-none">
                  CHASKA<span className="text-[#FF6B00]">.</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-gray-400 block mt-1 font-semibold">
                  RESTAURANT
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              "{RESTAURANT_INFO.tagline}"
            </p>

            <p className="text-xs text-gray-400">
              Serving authentic North Indian, Mughlai, Tandoori, Chinese and Seafood in Faridabad.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FF6B00] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FF6B00] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-5 border-l-2 border-[#FF6B00] pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#FF6B00] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF6B00] transition-colors">
                  About Our Restaurant
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#FF6B00] transition-colors">
                  Full Dining Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FF6B00] transition-colors">
                  Photo & Ambience Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#FF6B00] transition-colors">
                  Guest Reviews (4.4/5)
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:text-[#FF6B00] transition-colors">
                  Book A Table
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF6B00] transition-colors">
                  Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-5 border-l-2 border-[#FF6B00] pl-3">
              Contact & Hours
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300 leading-relaxed">
                  {RESTAURANT_INFO.address}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-xs text-gray-300 hover:text-[#FF6B00] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span className="text-xs text-gray-300">{RESTAURANT_INFO.hours}</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span className="text-xs text-gray-300">info@chaskarestaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Special Offers & Updates */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-5 border-l-2 border-[#FF6B00] pl-3">
              VIP Table & Offers
            </h4>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Subscribe to get seasonal menu releases, chef special updates and exclusive dining discount invites.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white rounded-lg transition-colors flex items-center justify-center"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-green-400 font-medium">
                  Thank you for subscribing to Chaska VIP!
                </p>
              )}
            </form>

            <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
              {RESTAURANT_INFO.facilities.slice(0, 4).map((f) => (
                <span key={f} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                  ✓ {f}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Chaska Restaurant. All Rights Reserved.</p>
          <p className="text-gray-400">
            World Street by Omaxe, Sector 79, Faridabad
          </p>
        </div>
      </div>
    </footer>
  );
};
