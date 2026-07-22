import React, { useState, useEffect } from 'react';
import { PhoneCall, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.rawPhone}?text=Hello%20Chaska%20Restaurant,%20I%20would%20like%20to%20reserve%20a%20table%20/%20inquire%20about%20the%20menu.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.51 1.036 3.53l-.678 2.473 2.539-.665c1.01.583 2.181.902 3.401.902 3.181 0 5.768-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm3.385 8.131c-.147.413-.855.787-1.196.837-.34.05-.783.08-2.28-.535-1.782-.733-2.92-2.548-3.009-2.668-.088-.12-.722-.96-.722-1.831 0-.871.455-1.301.618-1.477.163-.176.356-.22.475-.22.119 0 .238.002.341.008.11.006.257-.042.402.308.147.352.502 1.223.546 1.312.044.09.073.195.014.312-.058.118-.088.192-.176.293-.088.102-.186.228-.266.307-.089.088-.182.184-.078.362.103.177.458.756.983 1.224.675.602 1.244.789 1.421.877.177.088.281.073.384-.044.103-.118.441-.514.558-.69.118-.176.236-.147.397-.088.162.059 1.03.486 1.206.574.177.088.295.132.339.205.044.073.044.426-.103.839z"/>
      </svg>
      <span className="absolute right-16 px-3 py-1.5 bg-[#111111] text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-white/10 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 bg-[#111111] hover:bg-[#FF6B00] text-white border border-white/10 hover:border-[#FF6B00] rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
