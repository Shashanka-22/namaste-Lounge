import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hello Namaste Lounge Palolem! 🌴 I am browsing your website and would like to enquire about table availability / today’s special catch.'
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip Notification */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-[#101A17]/95 text-[#FAF7F0] text-xs rounded-lg border border-[#C6A56A]/30 shadow-2xl backdrop-blur-md animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Table Bookings & Questions</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#FAF7F0]/50 hover:text-[#FAF7F0] ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/917820975889?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 group"
        aria-label="Chat with Namaste Lounge on WhatsApp"
        title="Chat on WhatsApp: +91 78209 75889"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366] group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
