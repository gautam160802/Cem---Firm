import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Suryacem</div>
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-yellow-500">
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
