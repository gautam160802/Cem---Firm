import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="flex flex-col items-start leading-tight">
          <div className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-yellow-600 tracking-wide drop-shadow-sm">
              MAGNUM
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold tracking-widest shadow-sm">
              SPARKING WHITE LIME WASH
            </span>
          </div>

          <div className="mt-1 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="text-gray-700 mr-1">THE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 font-bold">
              SUPERIOR WHITE BOND
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-semibold text-base tracking-wide">
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
              href="#applications"
              className="hover:text-yellow-600 transition duration-300"
            >
              Applications
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

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-yellow-600">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl transition duration-300">
          <ul className="flex flex-col gap-6 px-6 py-5 text-gray-700 text-base font-semibold">
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
