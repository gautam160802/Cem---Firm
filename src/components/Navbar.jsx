import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Name */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-yellow-600 tracking-wide">
            MAGNUM
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-semibold tracking-widest">
            LIME WASH
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center gap-6 text-gray-700 font-medium text-base">
          <li>
            <a
              href="#home"
              className="hover:text-yellow-600 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:text-yellow-600 transition duration-300"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#whychooseus"
              className="hover:text-yellow-600 transition duration-300"
            >
              Why Choose Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-600 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
