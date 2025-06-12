import React from "react";

export default function FloatingContactButtons() {
  const buttons = [
    {
      name: "WhatsApp",
      icon: "/assets/whatsapp.png",
      url: "https://wa.me/919876543210",
    },
    {
      name: "Telegram",
      icon: "/assets/telegram.png",
      url: "https://t.me/yourusername",
    },
    {
      name: "Call Us",
      icon: "/assets/phone.png",
      url: "tel:+919876543210",
    },
    // {
    //   name: "Email Us",
    //   icon: "/assets/email.png",
    //   url: "mailto:contact@suryacem.com",
    // },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 animate-smooth-bounce">
      {buttons.map((btn, index) => (
        <a
          key={index}
          href={btn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <img
            src={btn.icon}
            alt={btn.name}
            className="w-12 h-12 hover:scale-110 transition-transform duration-200"
          />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {btn.name}
          </span>
        </a>
      ))}
    </div>
  );
}
