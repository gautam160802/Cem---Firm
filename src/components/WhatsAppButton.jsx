import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919598808287"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        className="w-12 h-12 hover:scale-110 transition-transform duration-200"
      />
    </a>
  );
}
