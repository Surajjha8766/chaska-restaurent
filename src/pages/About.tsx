import React from 'react';
import { Sparkles, Utensils, Heart, ShieldCheck, Clock, MapPin, Award, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  const whyChooseUsPillars = [
    {
      title: "Fresh Ingredients",
      desc: "We source our vegetables, meats, and dairy daily to ensure pristine taste and hygiene in every preparation.",
      icon: Sparkles
    },
    {
      title: "Experienced Chefs",
      desc: "Our master chefs bring decades of expertise in authentic North Indian tandoor marinades and Mughlai stews.",
      icon: Award
    },
    {
      title: "Family Friendly",
      desc: "Designed with spacious booth seating, child-friendly dish options, and a warm family environment.",
      icon: Users
    },
    {
      title: "Outdoor Seating",
      desc: "Enjoy picturesque European boulevard dining at Amsterdam Street, World Street by Omaxe.",
      icon: Utensils
    },
    {
      title: "Fast Service",
      desc: "Attentive staff and streamlined kitchen workflows ensure quick table serving and hot takeaway.",
      icon: Clock
    },
    {
      title: "Premium Ambience",
      desc: "Modern aesthetics, plush leather seats, soothing lighting, and immaculate cleanliness.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] pt-24 pb-16">
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            Our Legacy & Passion
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            About Chaska Restaurant
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            "Where Every Bite Creates Memories" • Sector 79, Faridabad
          </p>
        </div>
      </section>


      {/* Main Content & Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold rounded-full uppercase">
              <Utensils className="w-3.5 h-3.5" /> Welcome To Chaska
            </span>

            <h2 className="text-3xl font-serif font-bold text-[#111111] leading-tight">
              A Premier Dining Destination at World Street by Omaxe
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              Welcome to <strong className="text-[#111111]">Chaska Restaurant</strong>, located at Shop No. 3, Amsterdam Street, World Street by Omaxe, Sector 79, Faridabad.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              We serve authentic <strong>North Indian, Chinese, Mughlai, Tandoori, and Seafood</strong> dishes prepared using premium ingredients and traditional recipes. Every dish on our menu is crafted with precision to deliver rich aromas, bold flavors, and comforting dining satisfaction.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Our mission is to provide delicious food, warm hospitality, and memorable dining experiences for families, friends, and food lovers across Faridabad and Delhi NCR.
            </p>

            {/* Quick Specs */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-[#111111] uppercase tracking-wider">
                Key Restaurant Highlights
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>North Indian & Tandoor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>Chinese & Noodles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>Fresh Surmai Sea Food</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>Veg & Non-Veg Kitchens</span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
                alt="Chaska Special Platter"
                referrerPolicy="no-referrer"
                className="w-full h-72 object-cover rounded-2xl shadow-md"
              />
              <div className="p-5 bg-[#111111] text-white rounded-2xl space-y-1">
                <p className="text-2xl font-serif font-bold text-[#FF6B00]">4.4 ⭐</p>
                <p className="text-xs font-semibold">148 Google Reviews</p>
                <p className="text-[10px] text-gray-400">Loved for Butter Chicken & Dal Makhani</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
                alt="Outdoor seating Amsterdam Street"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>

        </div>
      </section>


      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
              The Chaska Standard
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#111111] mt-1">
              Why Choose Chaska Restaurant?
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              Six reasons why we are Faridabad's favorite North Indian and Tandoori destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#F8F8F8] border border-gray-200 rounded-2xl hover:border-[#FF6B00] transition-all hover:shadow-lg space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shadow-md shadow-[#FF6B00]/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#111111]">{pillar.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* FACILITIES & AMENITIES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
              Guest Comfort & Amenities
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Thoughtfully Designed For Every Occasion
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Whether you are hosting a grand family dinner, catching up with friends after work, ordering takeaway, or strolling with your pet along World Street, we have facilities catered for your comfort.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {RESTAURANT_INFO.facilities.map((fac) => (
                <div key={fac} className="flex items-center gap-2 p-3 bg-white/10 rounded-xl border border-white/10 text-xs font-medium text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                to="/reservation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-[#FF6B00]/20"
              >
                Reserve A Table Today
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
