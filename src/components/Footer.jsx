import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Magnum Cement</h3>
          <p className="text-gray-400">Building Trust, One Bag at a Time.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-yellow-400">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-400">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Magnum Cement. All rights reserved.
      </div>
    </footer>
  );
}
