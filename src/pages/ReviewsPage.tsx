import React, { useState } from 'react';
import { Star, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';
import { Review } from '../types';

export const ReviewsPage: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author,
      comment,
      rating,
      date: 'Just now',
      location: 'Chaska Website Guest',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setAuthor('');
    setComment('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            Guest Testimonials
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Customer Reviews & Ratings
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
            Read authentic dining experiences from our guests in Faridabad and share your own dining story with Chaska Restaurant.
          </p>
        </div>
      </section>

      {/* Ratings Breakdown Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Big Score Box */}
          <div className="lg:col-span-4 text-center lg:border-r border-gray-200 lg:pr-8 space-y-2">
            <span className="text-6xl font-serif font-black text-[#111111]">4.4</span>
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs font-bold text-gray-700">Based on 148 Google Reviews</p>
            <p className="text-[11px] text-gray-500">World Street by Omaxe, Sector 79, Faridabad</p>
          </div>

          {/* Metrics Breakdown Progress Bars */}
          <div className="lg:col-span-8 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Food Quality & Taste</span>
                <span>4.8 / 5.0</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF6B00] rounded-full w-[96%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Ambience & Outdoor Seating</span>
                <span>4.6 / 5.0</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF6B00] rounded-full w-[92%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Staff Hospitality & Service Speed</span>
                <span>4.5 / 5.0</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF6B00] rounded-full w-[90%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1">
                <span>Value for Money</span>
                <span>4.4 / 5.0</span>
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF6B00] rounded-full w-[88%]" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reviews List & Write Review Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Reviews List */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#111111]">
            Recent Guest Feedback
          </h2>

          <div className="space-y-4">
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#111111]">{rev.author}</h4>
                      <p className="text-[10px] text-gray-500">{rev.location} • {rev.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Write A Review Form */}
        <div className="lg:col-span-5">
          <div className="bg-[#111111] text-white p-8 rounded-3xl shadow-xl space-y-6 sticky top-28">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FF6B00]/20 rounded-xl text-[#FF6B00]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Leave Your Review</h3>
                <p className="text-xs text-gray-400">Share your dining experience at Chaska</p>
              </div>
            </div>

            {submitted ? (
              <div className="p-6 bg-green-900/30 border border-green-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-green-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Review Submitted!</h4>
                <p className="text-xs text-gray-300">
                  Thank you for reviewing Chaska Restaurant. Your feedback inspires our culinary team!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Rating Selector */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Your Overall Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 text-amber-400 hover:scale-125 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400' : 'text-gray-600'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-400 ml-2">{rating} Stars</span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Ankit Sharma"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Feedback & Recommendations *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write about the food, Butter Chicken, service, or outdoor seating..."
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/20"
                >
                  <Send className="w-4 h-4" />
                  Post Review
                </button>

              </form>
            )}

          </div>
        </div>

      </section>

    </div>
  );
};
