import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, Users, Phone, Mail, User, HeartHandshake, CheckCircle2, Sparkles, Copy, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { OrderItem, ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationPage: React.FC = () => {
  const location = useLocation();
  const preOrdersFromState: OrderItem[] = location.state?.preOrders || [];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('07:30 PM');
  const [guests, setGuests] = useState(2);
  const [seating, setSeating] = useState<'Indoor' | 'Outdoor' | 'Family Dining'>('Indoor');
  const [specialRequest, setSpecialRequest] = useState('');
  const [confirmedData, setConfirmedData] = useState<{ id: string; details: ReservationData } | null>(null);

  useEffect(() => {
    // Set default date to today or tomorrow
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const timeSlots = [
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;

    const bookingId = `CHK-${Math.floor(100000 + Math.random() * 900000)}`;
    const resData: ReservationData = {
      name,
      phone,
      email,
      date,
      time,
      guests,
      seatingPreference: seating,
      specialRequest,
      preOrderItems: preOrdersFromState
    };

    setConfirmedData({ id: bookingId, details: resData });

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback safe
    }
  };

  const handleWhatsAppNotify = () => {
    if (!confirmedData) return;
    const { id, details } = confirmedData;
    let text = `Hello Chaska Restaurant,%0A%0AI have booked a table online:%0ABooking ID: ${id}%0AName: ${details.name}%0APhone: ${details.phone}%0ADate: ${details.date}%0ATime: ${details.time}%0AGuests: ${details.guests}%0ASeating: ${details.seatingPreference}`;
    
    if (details.specialRequest) {
      text += `%0ANote: ${encodeURIComponent(details.specialRequest)}`;
    }

    if (details.preOrderItems && details.preOrderItems.length > 0) {
      text += `%0APre-ordered Dishes:%0A` + details.preOrderItems.map(i => `• ${i.item.name} x${i.quantity}`).join('%0A');
    }

    window.open(`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#111111] pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#111111] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            VIP Dining Experience
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Table Reservation
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto">
            Secure your table for family dining, dates, business dinners, or celebrations at Amsterdam Street, Sector 79 Faridabad.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {confirmedData ? (
          /* Confirmation Screen */
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
                Reservation Confirmed
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#111111]">
                We Look Forward To Welcoming You!
              </h2>
              <p className="text-xs text-gray-500">
                Confirmation ID: <strong className="text-[#111111] font-mono text-sm">{confirmedData.id}</strong>
              </p>
            </div>

            {/* Summary Ticket */}
            <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3 text-xs">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Guest Name</span>
                <span className="font-bold text-[#111111]">{confirmedData.details.name}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Contact Number</span>
                <span className="font-bold text-[#111111]">{confirmedData.details.phone}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Date & Time</span>
                <span className="font-bold text-[#111111]">{confirmedData.details.date} at {confirmedData.details.time}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Guests & Seating</span>
                <span className="font-bold text-[#111111]">{confirmedData.details.guests} People ({confirmedData.details.seatingPreference})</span>
              </div>

              {confirmedData.details.preOrderItems && confirmedData.details.preOrderItems.length > 0 && (
                <div className="pt-2">
                  <p className="font-bold text-[#111111] mb-1">Pre-Selected Menu Dishes:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-0.5">
                    {confirmedData.details.preOrderItems.map(i => (
                      <li key={i.item.id}>{i.item.name} x{i.quantity}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={handleWhatsAppNotify}
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                Send Confirmation to WhatsApp
              </button>

              <button
                onClick={() => setConfirmedData(null)}
                className="px-6 py-3 bg-[#111111] hover:bg-[#FF6B00] text-white text-xs font-bold rounded-xl transition-all"
              >
                Book Another Table
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
            
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-serif font-bold text-[#111111]">
                Reserve Your Dining Table
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Please fill in your contact and timing preferences. No advance payment required!
              </p>

              {preOrdersFromState.length > 0 && (
                <div className="mt-4 p-4 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-2xl text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#FF6B00]">✓ Menu Dishes Attached:</span>
                    <p className="text-gray-700 mt-0.5">
                      {preOrdersFromState.map(i => `${i.item.name} (x${i.quantity})`).join(', ')}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleBook} className="space-y-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Suraj Sharma"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone Number (+91) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98996 93495"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="suraj@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-[#FF6B00]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Dining Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-[#FF6B00]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating Preference Pills */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Seating Preference
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'Indoor', label: 'Plush Indoor Dining' },
                    { key: 'Outdoor', label: 'Amsterdam Street Outdoor' },
                    { key: 'Family Dining', label: 'Family Booth' }
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.key}
                      onClick={() => setSeating(s.key as any)}
                      className={`p-3 text-xs font-bold rounded-xl border transition-all text-center ${
                        seating === s.key
                          ? 'bg-[#111111] text-white border-[#111111] shadow-md'
                          : 'bg-[#F8F8F8] text-gray-700 border-gray-300 hover:border-[#111111]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Special Instructions / Requests
                </label>
                <textarea
                  rows={3}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="e.g. Birthday decoration, highchair for toddler, quiet table, pet outside..."
                  className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-gray-300 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-2xl text-sm transition-all shadow-xl shadow-[#FF6B00]/30 hover:scale-[1.01]"
              >
                Confirm Table Reservation
              </button>

            </form>

          </div>
        )}
      </section>

    </div>
  );
};
