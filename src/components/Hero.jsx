// ✅ Correct Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="text-center bg-black bg-opacity-50 p-6 rounded">
        <h1 className="text-4xl md:text-6xl font-bold">
          Build Strong with Magnum
        </h1>
        <p className="mt-4 text-xl">Premium cement for durable constructions</p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-lg font-medium">
          View Products
        </button>
      </div>
    </section>
  );
}
