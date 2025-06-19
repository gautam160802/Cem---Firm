import React from "react";
import { motion } from "framer-motion";

const { div: MotionDiv } = motion;

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex items-center justify-center text-white relative"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Hero content */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6 md:px-12 py-10 bg-black bg-opacity-70 rounded-lg shadow-xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build Strong. Build Trust. <br />
          <span className="text-yellow-400">With Magnum Lime Wash</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          High-quality cement trusted by professionals across India. From
          foundation to finish — we support your vision.
        </p>

        <a href="#products">
          <button className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full text-lg font-semibold shadow-md transition-all duration-300">
            View Products
          </button>
        </a>
      </MotionDiv>
    </section>
  );
}
