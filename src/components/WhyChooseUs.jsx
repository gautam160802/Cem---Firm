import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaCogs, FaShieldAlt, FaHome } from "react-icons/fa";

const backgroundImages = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg4.jpg",
  "/images/bg5.jpg",
];

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={800}
        loop={true}
        className="absolute inset-0 z-0"
      >
        {backgroundImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover object-center brightness-75"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative bg-black/60 w-full py-16 px-4 text-white z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:scale-105 transition-all duration-300">
              <FaCogs className="text-yellow-400 text-3xl md:text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">Features</h3>
              <ul className="space-y-2 text-base md:text-lg">
                <li>🧪 High Quality Materials</li>
                <li>⚖️ Consistent Strength</li>
                <li>🎨 Smooth Finish Technology</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:scale-105 transition-all duration-300">
              <FaShieldAlt className="text-green-400 text-3xl md:text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">Benefits</h3>
              <ul className="space-y-2 text-base md:text-lg">
                <li>✅ Long-term Durability</li>
                <li>💰 Cost Effective Solution</li>
                <li>🌱 Eco-Friendly Composition</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:scale-105 transition-all duration-300">
              <FaHome className="text-pink-400 text-3xl md:text-4xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Applications
              </h3>
              <ul className="space-y-2 text-base md:text-lg">
                <li>🏗️ Residential Buildings</li>
                <li>🏢 Commercial Projects</li>
                <li>🏭 Industrial Constructions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
