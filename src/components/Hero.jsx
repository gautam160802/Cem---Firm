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
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Hero content */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 bg-black bg-opacity-60 p-6 md:p-10 rounded-lg"
        data-aos="zoom-in"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Build Strong with Magnum
        </h1>
        <p className="mt-4 text-xl">Premium cement for durable constructions</p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-lg font-medium transition">
          View Products
        </button>
      </MotionDiv>
    </section>
  );
}
