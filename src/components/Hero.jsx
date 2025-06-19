import React from "react";
import { motion } from "framer-motion";
import HeroBg from "../assets/images/hero-background.jpg";
import ProductImg from "../assets/images/product-showcase.png";

const { div: MotionDiv } = motion;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-white py-20 px-4"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroBg}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      </div>

      {/* Text Content */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-[90vw] sm:max-w-3xl"
      >
        <p className="text-yellow-400 mb-3 text-sm sm:text-base font-semibold">
          🏆 Consistent Award Winning Product!
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-snug">
          India’s No.1 <br />
          Premium WhiteWash <br /> MAGNUM
        </h1>
        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200">
          High-quality Lime Wash trusted by professionals across India. From
          foundation to finish — we support your vision.
        </p>

        <a href="#products">
          <button className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-300">
            For Details ➔
          </button>
        </a>
      </MotionDiv>

      {/* Floating Product Image */}
      <div className="absolute bottom-4 right-2 sm:right-10 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="p-2 sm:p-3 bg-white/20 rounded-3xl shadow-xl"
        >
          <img
            src={ProductImg}
            alt="Product Showcase"
            className="w-24 sm:w-40 md:w-52 lg:w-60 object-contain transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
