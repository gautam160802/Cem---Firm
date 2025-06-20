import React from "react";

export default function FloatingContactButtons() {
  const buttons = [
    {
      name: "WhatsApp",
      icon: "/assets/whatsapp.png",
      url: "https://wa.me/9598808287",
      bgColor: "bg-green-500",
    },
    {
      name: "Telegram",
      icon: "/assets/telegram.png",
      url: "https://t.me/yourusername",
      bgColor: "bg-blue-500",
    },
    {
      name: "Call Us",
      icon: "/assets/phone.png",
      url: "tel:+9598808287",
      bgColor: "bg-yellow-500",
    },
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
          <div
            className={`p-3 rounded-full shadow-lg ring-2 ring-white ${btn.bgColor} hover:scale-110 transition-transform duration-300`}
          >
            <img src={btn.icon} alt={btn.name} className="w-7 h-7" />
          </div>
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {btn.name}
          </span>
        </a>
      ))}
    </div>
  );
}
