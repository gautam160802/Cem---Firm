// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-2">Gautam Cement</h3>
          <p>
            Quality cement distributor for UP & Bihar. Trusted by 100+ builders.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-yellow-400">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Location</h4>
          <p>Lucknow, Uttar Pradesh</p>
          <p>Bihar Office: Patna</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-400">
              WhatsApp
            </a>
            <a href="#" className="hover:text-yellow-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Gautam Cement. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
