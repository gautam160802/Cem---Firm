import React from "react";

export default function Navbar({ user, onLogin, onRegister, onLogout }) {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Suryacem</div>
        <div className="space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#products" className="text-gray-600 hover:text-gray-900">
            Products
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
            Testimonials
          </a>
          {user ? (
            <>
              <span className="text-green-600 font-semibold">{user.name}</span>
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
              <button
                onClick={onRegister}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
