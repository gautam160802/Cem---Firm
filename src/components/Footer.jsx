import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Magnum. All rights reserved.</p>
      </div>
    </footer>
  );
}
