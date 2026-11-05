import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Users,
  Phone,
  User,
  MessageSquare,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ReservationProps {
  prefilledDish?: string;
  onClearPrefilledDish?: () => void;
}

export const Reservation: React.FC<ReservationProps> = ({
  prefilledDish,
  onClearPrefilledDish,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  useEffect(() => {
    if (prefilledDish) {
      setSpecialRequests((prev) =>
        prev
          ? `${prev}, Dish: ${prefilledDish}`
          : `Interested in trying: ${prefilledDish}`
      );
    }
  }, [prefilledDish]);

  const generateWhatsAppMessage = () => {
    const message = `Hello Namaste Lounge Palolem! 🌴
I would like to request a table reservation:

• Name: ${name || 'Guest'}
• Contact Phone: ${phone || 'Not provided'}
• Date: ${date}
• Preferred Time: ${time}
• Number of Guests: ${guests}
${specialRequests ? `• Special Requests / Dishes: ${specialRequests}` : ''}

Please confirm table availability with me. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/917820975889?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="reservation" className="py-24 md:py-32 bg-[#101A17] text-[#FAF7F0] relative border-t border-[#C6A56A]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hospitality Invitation */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A56A] font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Table Reservations</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FAF7F0] font-normal leading-[1.1] text-balance">
              Your Table <br />
              <span className="italic font-light text-[#C6A56A]">Is Waiting.</span>
            </h2>

            <p className="mt-6 text-base text-[#B9B5A9] font-light leading-relaxed">
              Palolem evenings fill quickly—especially during live music sessions and dinner service. Reserve your spot under the fairy-lit palms in advance.
            </p>

            {/* Direct Contact Pill */}
            <div className="mt-8 p-6 rounded-sm bg-[#19241F] border border-[#C6A56A]/25 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-[#C6A56A] font-semibold">
                Direct Host Line & WhatsApp
              </p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="tel:+917820975889"
                  className="font-serif text-2xl text-[#FAF7F0] hover:text-[#C6A56A] transition-colors tabular-nums font-semibold"
                >
                  +91 78209 75889
                </a>
              </div>
              <p className="mt-2 text-xs text-[#B9B5A9]">
                Dr Pundlik Gaitonde Road, Mohanbagh, Palolem, Canacona, Goa.
              </p>
            </div>

            {/* Note on Confirmation */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-sm bg-[#19241F]/60 border border-[#C6A56A]/20 text-xs text-[#FAF7F0]/80">
              <Info className="w-4 h-4 text-[#C6A56A] shrink-0 mt-0.5" />
              <p>
                <strong>Transparent Booking Policy:</strong> Submitting a request sends your reservation directly to our floor manager. We promptly confirm table availability via WhatsApp or phone.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Reservation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#19241F] border border-[#C6A56A]/30 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-10 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#C6A56A]/20 border border-[#C6A56A] text-[#C6A56A] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#FAF7F0]">
                    Reservation Request Received
                  </h3>
                  <p className="mt-4 text-sm text-[#B9B5A9] max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-[#FAF7F0]">{name || 'Guest'}</strong>! We have received your booking request for{' '}
                    <strong className="text-[#C6A56A]">{guests} guests</strong> on{' '}
                    <strong className="text-[#C6A56A]">{date}</strong> at{' '}
                    <strong className="text-[#C6A56A]">{time}</strong>.
                  </p>

                  <div className="mt-6 p-4 rounded-sm bg-[#101A17] border border-[#C6A56A]/20 max-w-md mx-auto text-xs text-[#B9B5A9]">
                    <p>
                      Our floor host will review seating and message or call you at{' '}
                      <strong className="text-[#FAF7F0] tabular-nums">{phone || 'your number'}</strong> to confirm.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/917820975889?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-[#101A17] text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open in WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 border border-[#C6A56A]/40 hover:border-[#C6A56A] text-xs uppercase tracking-wider text-[#FAF7F0] rounded-sm transition-colors cursor-pointer"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {prefilledDish && (
                    <div className="p-3 rounded-sm bg-[#C6A56A]/15 border border-[#C6A56A]/30 flex items-center justify-between text-xs text-[#C6A56A]">
                      <span>Table requested for dish: <strong>{prefilledDish}</strong></span>
                      {onClearPrefilledDish && (
                        <button
                          type="button"
                          onClick={onClearPrefilledDish}
                          className="text-[#FAF7F0]/60 hover:text-[#FAF7F0] underline ml-2 cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#FAF7F0]/70 mb-2 font-medium">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#C6A56A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sahil Varma"
                          className="w-full pl-10 pr-4 py-3 bg-[#101A17] border border-[#C6A56A]/25 rounded-sm text-sm text-[#FAF7F0] placeholder:text-[#FAF7F0]/40 focus:outline-none focus:border-[#C6A56A] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#FAF7F0]/70 mb-2 font-medium">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#C6A56A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 bg-[#101A17] border border-[#C6A56A]/25 rounded-sm text-sm text-[#FAF7F0] placeholder:text-[#FAF7F0]/40 focus:outline-none focus:border-[#C6A56A] transition-colors tabular-nums"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#FAF7F0]/70 mb-2 font-medium">
                        Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#C6A56A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 bg-[#101A17] border border-[#C6A56A]/25 rounded-sm text-sm text-[#FAF7F0] focus:outline-none focus:border-[#C6A56A] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#FAF7F0]/70 mb-2 font-medium">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-[#C6A56A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 bg-[#101A17] border border-[#C6A56A]/25 rounded-sm text-sm text-[#FAF7F0] focus:outline-none focus:border-[#C6A56A] transition-colors cursor-pointer"
                        >
                          <option value="12:00">12:00 PM (Lunch)</option>
                          <option value="13:00">01:00 PM (Lunch)</option>
                          <option value="14:00">02:00 PM (Afternoon)</option>
                          <option value="17:00">05:00 PM (Sunset Drinks)</option>
                          <option value="18:30">06:30 PM (Sundowner)</option>
                          <option value="19:30">07:30 PM (Dinner & Music)</option>
                          <option value="20:30">08:30 PM (Dinner)</option>
                          <option value="21:30">09:30 PM (Late Dinner)</option>
                          <option value="22:30">10:30 PM (Nightcap)</option>
                        </select>
                      </div>
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#FAF7F0]/70 mb-2 font-medium">
                        Guests *
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-[#C6A56A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 bg-[#101A17] border border-[#C6A56A]/25 rounded-sm text-sm text-[#FAF7F0] focus:outline-none focus:border-[#C6A56A] transition-colors cursor-pointer"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons</option>
                          <option value="5">5 Persons</option>
                          <option value="6">6 Persons</option>
                          <option value="7">7 Persons</option>
                          <option value="8+">8+ Gathering</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#FAF7F0]/70 mb-2 font-medium">
                      Special Requests / Seating Preference
                    </label>
                    <textarea
                      rows={3}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Near live acoustic stage, table beneath palms, pre-order Kingfish Seafood Platter..."
                      className="w-full p-3.5 bg-[#101A17] border border-[#C6A56A]/25 rounded-sm text-sm text-[#FAF7F0] placeholder:text-[#FAF7F0]/40 focus:outline-none focus:border-[#C6A56A] transition-colors"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="flex-1 py-4 bg-[#25D366] hover:bg-[#20ba59] text-[#101A17] text-xs uppercase tracking-[0.16em] font-bold rounded-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Reserve via WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-4 bg-[#C6A56A] hover:bg-[#DFCA9B] text-[#101A17] text-xs uppercase tracking-[0.16em] font-bold rounded-sm transition-all duration-200 shadow-lg cursor-pointer"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
