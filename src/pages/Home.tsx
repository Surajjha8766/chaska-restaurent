import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Star,
  Clock,
  MapPin,
  Calendar,
  Utensils,
  Award,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Users,
  Flame,
  HeartHandshake
} from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS, REVIEWS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface HomeProps {
  onSelectItem: (item: MenuItem) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectItem }) => {
  const popularDishes = MENU_ITEMS.filter((item) => item.isPopular || item.isChefSpecial).slice(0, 6);

  const features = [
    {
      title: "Fresh Ingredients",
      desc: "Daily handpicked farm-fresh vegetables, premium meat cuts & freshly ground whole spices.",
      icon: Sparkles
    },
    {
      title: "Authentic Taste",
      desc: "Traditional slow-cooking North Indian & Mughlai clay-oven techniques.",
      icon: Award
    },
    {
      title: "Experienced Chefs",
      desc: "Crafted by veteran chefs with over 15+ years of culinary mastery.",
      icon: Utensils
    },
    {
      title: "Premium Ambience",
      desc: "Plush indoor dining & vibrant Amsterdam Street outdoor promenade seating.",
      icon: ShieldCheck
    },
    {
      title: "Family Friendly",
      desc: "Spacious seating booths, warm hospitality & children-friendly menu choices.",
      icon: Users
    },
    {
      title: "Quick Service & Delivery",
      desc: "Prompt table service and piping-hot takeaway packaging.",
      icon: Flame
    },
    {
      title: "Pet Friendly Outside",
      desc: "Welcoming outdoor boulevard seating where dogs are allowed outside.",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 bg-[#0B0B0B] text-white overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury Restaurant Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
        </div>

        {/* Ambient Glow Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Rating & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-xs font-semibold text-white">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold">{RESTAURANT_INFO.rating}/5.0</span>
              </div>
              <span className="text-white/40">•</span>
              <span className="text-gray-200">{RESTAURANT_INFO.reviewCount} Google Reviews</span>
              <span className="text-white/40">•</span>
              <span className="text-green-400 font-bold flex items-center gap-1">
                <Clock className="w-3 h-3" /> Open till 11 PM
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-[1.1] text-white">
              Savor The Taste Of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-orange-400 to-amber-300">
                Royal Traditions
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              "{RESTAURANT_INFO.tagline}"
            </p>

            <p className="text-sm text-gray-400 max-w-xl">
              Authentic North Indian, Mughlai, Tandoori, Chinese & Seafood culinary delicacies located at World Street by Omaxe, Sector 79, Faridabad.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/reservation"
                className="px-7 py-4 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-2xl transition-all shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Reserve A Table
              </Link>

              <Link
                to="/menu"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 backdrop-blur-md transition-all hover:scale-105 flex items-center gap-2"
              >
                <Utensils className="w-5 h-5 text-[#FF6B00]" />
                Explore Full Menu
              </Link>
            </div>

            {/* Address & Phone Quick Snippet */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                <span>Amsterdam Street, Sector 79, Faridabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF6B00]" />
                <span>11:00 AM – 11:00 PM Daily</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000"
                alt="Chaska Special Non Veg Grilled Platter"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Highlight Card 1 */}
              <div className="absolute top-6 right-6 glass-dark p-3 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Chaska Special</p>
                  <p className="text-[10px] text-gray-300">Grilled Platter ₹940</p>
                </div>
              </div>

              {/* Floating Highlight Card 2 */}
              <div className="absolute bottom-6 left-6 right-6 glass-dark p-4 rounded-2xl border border-white/20 shadow-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#FF6B00] tracking-widest uppercase">
                    Chef's Favorite
                  </span>
                  <h4 className="text-base font-serif font-bold text-white">Butter Chicken & Naan</h4>
                  <p className="text-xs text-gray-300">Rich creamy makhani sauce</p>
                </div>
                <Link
                  to="/menu"
                  className="p-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white rounded-xl transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ABOUT SECTION TEASER */}
      <section className="py-20 bg-white text-[#111111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Composition */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
                  alt="Interior dining"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl object-cover h-64 w-full shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800"
                  alt="Dal Makhani"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl object-cover h-48 w-full shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800"
                  alt="Paneer Tikka"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl object-cover h-48 w-full shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
                  alt="Outdoor seating"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl object-cover h-64 w-full shadow-lg"
                />
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold rounded-full uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> About Chaska Restaurant
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#111111] leading-tight">
                Authentic Flavors, Warm Hospitality & Unforgettable Dining
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                Welcome to <strong className="text-[#111111]">Chaska Restaurant</strong>, located at World Street by Omaxe, Sector 79, Faridabad. We serve authentic North Indian, Chinese, Mughlai, Tandoori and Seafood dishes prepared using premium ingredients and traditional slow-cooked recipes.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                Our mission is to provide delicious food, warm hospitality, and memorable dining experiences for families, friends, and food lovers. Whether you are craving creamy Butter Chicken, spicy Tandoori Platter, or crispy Hakka Noodles, Chaska is your ultimate food sanctuary.
              </p>

              {/* Quick Pillars */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F8F8F8] rounded-xl border border-gray-200">
                  <p className="text-2xl font-bold text-[#FF6B00] font-serif">100%</p>
                  <p className="text-xs font-semibold text-gray-700">Fresh Ingredients Daily</p>
                </div>
                <div className="p-4 bg-[#F8F8F8] rounded-xl border border-gray-200">
                  <p className="text-2xl font-bold text-[#FF6B00] font-serif">4.4 / 5</p>
                  <p className="text-xs font-semibold text-gray-700">148+ Google Reviews</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:text-[#e05e00] transition-colors"
                >
                  Read More About Our Culinary Journey <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CHEF'S POPULAR SPECIALS SHOWCASE */}
      <section className="py-20 bg-[#111111] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
                Culinary Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                Chef's Signature Recommendations
              </h2>
            </div>
            <Link
              to="/menu"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] hover:underline"
            >
              View Full Menu ({MENU_ITEMS.length} items) <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDishes.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-md ${
                      item.isVeg ? 'bg-green-900/90 text-green-300' : 'bg-red-900/90 text-red-300'
                    }`}>
                      {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 text-xs font-bold bg-[#FF6B00] text-white rounded-lg shadow-md">
                      ₹{item.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs font-bold text-[#FF6B00] hover:text-white transition-colors"
                    >
                      + Quick View & Estimate
                    </button>
                    <span className="text-xs text-gray-400 font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* FEATURE SECTION (WHY CHOOSE US) */}
      <section className="py-20 bg-[#F8F8F8] text-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            Excellence In Every Detail
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mt-2 text-[#111111]">
            Why Food Lovers Choose Chaska
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-3">
            We are dedicated to delivering royal dining quality, hygiene standards, and heartwarming hospitality at World Street Omaxe.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.slice(0, 4).map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center mb-6 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#111111] mb-2">{feat.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* GOOGLE REVIEWS SECTION */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold mb-3">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>4.4 Rating on Google (148 Reviews)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111111]">
              What Our Diners Say
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              Real feedback from food lovers in Faridabad & Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-[#F8F8F8] border border-gray-200 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#111111]">{rev.author}</h4>
                    <span className="text-[11px] text-gray-500">{rev.location} • {rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#FF6B00] text-white text-xs font-bold rounded-xl transition-colors"
            >
              Read All 148 Reviews & Share Yours <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* TABLE RESERVATION BANNER CTA */}
      <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            Book Your Special Evening
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Plan Your Family Dining or Celebration At Chaska
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Reserve your table in advance for indoor plush dining or outdoor European-style boulevard seating at Amsterdam Street.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/reservation"
              className="px-8 py-4 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-xl transition-all shadow-xl shadow-[#FF6B00]/30 hover:scale-105"
            >
              Reserve Table Now
            </Link>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
            >
              Call {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
