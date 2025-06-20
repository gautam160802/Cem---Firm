import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">
            MAGNUM
          </h2>
          <p className="text-gray-300 mb-6">
            Premium White Lime Wash trusted across India. Delivering superior
            whiteness, long-lasting bonding & perfect smooth finishes.
          </p>
          <div className="flex space-x-4 text-yellow-400 text-xl">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-yellow-400 transition">
                Products
              </a>
            </li>
            <li>
              <a
                href="#applications"
                className="hover:text-yellow-400 transition"
              >
                Applications
              </a>
            </li>
            <li>
              <a
                href="#whychooseus"
                className="hover:text-yellow-400 transition"
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Magnum Lime Wash. All rights reserved.
      </div>
    </footer>
  );
}
