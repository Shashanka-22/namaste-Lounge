import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  Navigation,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

export const Location: React.FC = () => {
  const googleMapsUrl = 'https://maps.google.com/?q=Namaste+Lounge+Palolem+Goa';

  return (
    <section id="location" className="py-24 md:py-32 bg-[#171714] text-[#F5F0E6] relative border-t border-[#C8A96B]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96B] font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Discover Us in Palolem</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F0E6] font-normal leading-[1.1]">
            Finding Your Way to Sanctuary
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F5F0E6]/75 font-light">
            Conveniently situated along Dr Pundlik Gaitonde Road in Mohanbagh, just a scenic stroll from the world-renowned curve of Palolem Beach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Address, Hours & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-xl bg-[#22221E] border border-[#C8A96B]/30 shadow-xl">
            <div>
              <div className="pb-6 border-b border-[#C8A96B]/20">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#C8A96B] font-bold">
                  Hospitality Landmark
                </span>
                <h3 className="font-serif text-3xl text-[#F5F0E6] mt-1 font-medium">
                  Namaste Lounge
                </h3>
                <p className="mt-3 text-sm text-[#F5F0E6]/80 font-light leading-relaxed">
                  Dr Pundlik Gaitonde Road, Mohanbagh, Palolem, Canacona, Goa 403702, India
                </p>
              </div>

              {/* Operating Hours */}
              <div className="py-6 border-b border-[#C8A96B]/20">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A96B] font-semibold mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Opening Hours</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#F5F0E6]/80">
                  <div className="flex justify-between items-center">
                    <span>Monday – Sunday</span>
                    <span className="font-mono text-[#F5F0E6] tabular-nums font-medium">11:30 AM – 11:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-[#C8A96B]">
                    <span>Kitchen & Full Bar</span>
                    <span>All-Day Service</span>
                  </div>
                  <div className="flex justify-between items-center text-[#F5F0E6]/60">
                    <span>Live Acoustic Sessions</span>
                    <span>Evenings from 07:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A96B] font-semibold mb-3">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Reservations & Enquiries</span>
                </div>
                <a
                  href="tel:+917820975889"
                  className="font-serif text-2xl text-[#F5F0E6] hover:text-[#C8A96B] transition-colors tabular-nums font-semibold block"
                >
                  +91 78209 75889
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#C8A96B]/20 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#C8A96B] hover:bg-[#D8BD83] text-[#171714] text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href="tel:+917820975889"
                className="flex-1 py-3.5 px-4 border border-[#C8A96B]/40 hover:border-[#C8A96B] text-[#F5F0E6] hover:text-[#C8A96B] text-xs uppercase tracking-wider font-semibold rounded flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/917820975889"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-[#171714] text-xs uppercase tracking-wider font-bold rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Viewport */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#C8A96B]/30 shadow-xl bg-[#1D1D19] relative min-h-[380px] lg:min-h-full">
            <iframe
              title="Namaste Lounge Location Map Palolem Goa"
              src="https://maps.google.com/maps?q=Namaste%20Lounge%20Palolem%20Goa&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0 filter contrast-[1.05] brightness-[0.92]"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute bottom-4 right-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#171714]/90 backdrop-blur-md border border-[#C8A96B]/40 text-[#C8A96B] hover:text-[#F5F0E6] text-xs rounded transition-colors shadow-lg"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
