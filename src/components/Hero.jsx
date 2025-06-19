import React from "react";
import { motion } from "framer-motion";

// ✅ Import images like this:
import HeroBg from "../assets/images/hero-background.jpg";
import ProductImg from "../assets/images/product-showcase.png";

const { div: MotionDiv } = motion;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroBg} // ✅ use imported image
          alt="Hero Background"
          className="w-full h-full object-cover object-center brightness-75"
        />
      </div>

      {/* Text Content Centered */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center px-6"
      >
        <p className="text-yellow-400 mb-4 font-semibold">
          🏆 Consistent Award Winning Product!
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          India’s No.1 <br />
          Premium WhiteWash <br /> MG CEM
        </h1>
        <p className="mt-6 text-lg text-gray-200">
          High-quality Lime Wash trusted by professionals across India. From
          foundation to finish — we support your vision.
        </p>

        <a href="#products">
          <button className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full text-lg font-semibold shadow-md transition-all duration-300">
            For Details ➔
          </button>
        </a>
      </MotionDiv>

      {/* Floating Product Image at Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <img
          src={ProductImg} // ✅ use imported image
          alt="Product"
          className="w-40 md:w-56 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
