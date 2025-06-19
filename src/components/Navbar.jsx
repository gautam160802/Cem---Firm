import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-yellow-600 tracking-wide">
              MAGNUM
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-semibold tracking-widest">
              LIME WASH
            </span>
          </div>

          {/* Tagline below perfectly aligned and colorful */}
          <div className="mt-1">
            <span
              className="block text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500"
              style={{ letterSpacing: "0.1em" }}
            >
              Superior White Bond
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-base">
          <li>
            <a href="#home" className="hover:text-yellow-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-yellow-600 transition">
              Products
            </a>
          </li>
          <li>
            <a
              href="#applications"
              className="hover:text-yellow-600 transition"
            >
              Applications
            </a>
          </li>
          <li>
            <a href="#whychooseus" className="hover:text-yellow-600 transition">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-yellow-600">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-6 px-6 py-4 text-gray-700 text-base font-medium">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-yellow-600 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={closeMenu}
                className="hover:text-yellow-600 transition"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#applications"
                onClick={closeMenu}
                className="hover:text-yellow-600 transition"
              >
                Applications
              </a>
            </li>
            <li>
              <a
                href="#whychooseus"
                onClick={closeMenu}
                className="hover:text-yellow-600 transition"
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-yellow-600 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
