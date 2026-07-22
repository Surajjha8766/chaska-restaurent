import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Contact & Directions
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
            Visit us at Amsterdam Street, World Street by Omaxe, Sector 79, Faridabad, or get in touch for party bookings and catering.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#111111]">Our Address</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {RESTAURANT_INFO.address}
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#111111]">Phone & WhatsApp</h3>
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-xs font-bold text-[#FF6B00] hover:underline block">
              {RESTAURANT_INFO.phone}
            </a>
            <p className="text-[11px] text-gray-500">Available for table inquiry & takeaway orders</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#111111]">Opening Hours</h3>
            <p className="text-xs text-gray-700 font-semibold">{RESTAURANT_INFO.hours}</p>
            <p className="text-[11px] text-gray-500">Open 7 Days A Week</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-serif font-bold text-[#111111]">Email Us</h3>
            <p className="text-xs text-gray-600">info@chaskarestaurant.com</p>
            <p className="text-[11px] text-gray-500">Event & Catering Inquiries</p>
          </div>
        </div>

        {/* Map & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Interactive Map Embed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-gray-200 rounded-3xl p-4 shadow-xl overflow-hidden">
              <h3 className="text-lg font-serif font-bold text-[#111111] px-2 mb-3">
                Find Us On Google Maps
              </h3>
              <div className="w-full h-96 rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  title="Chaska Restaurant Google Map Location"
                  src={RESTAURANT_INFO.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Facilities Bar */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-3">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Venue Facilities & Accessibility
              </h4>
              <div className="flex flex-wrap gap-2">
                {RESTAURANT_INFO.facilities.map((fac) => (
                  <span
                    key={fac}
                    className="px-3 py-1.5 bg-[#F8F8F8] border border-gray-200 rounded-xl text-xs font-medium text-gray-700 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    {fac}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#111111] text-white rounded-3xl p-8 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#FF6B00]/20 rounded-xl text-[#FF6B00]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">Send Us A Message</h3>
                  <p className="text-xs text-gray-400">Questions about menu, catering or private dining?</p>
                </div>
              </div>

              {sent ? (
                <div className="p-6 bg-green-900/30 border border-green-500/30 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Sent!</h4>
                  <p className="text-xs text-gray-300">
                    Thank you for reaching out. Our manager will call/email you back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Suraj Jha"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98996 93495"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about table availability, birthday party packages, bulk orders..."
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/20"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
