import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [showLabel, setShowLabel] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
      <a
        href="https://wa.me/919892973412"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] transition-colors flex items-center justify-center shadow-lg"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
      {showLabel && (
        <div className="relative bg-white rounded-lg shadow-lg px-4 py-2 text-sm text-gray-700 border border-gray-100">
          How can we help you?
          <button
            onClick={() => setShowLabel(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center"
            aria-label="close"
          >
            <X className="w-3 h-3 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
