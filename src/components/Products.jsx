import React from "react";
import {
  FaBuilding,
  FaHome,
  FaPaintRoller,
  FaWater,
  FaSpa,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Applications() {
  const applications = [
    {
      icon: <FaBuilding />,
      title: "Commercial Buildings",
      image: "/images/applications/commercial.jpg",
      description:
        "Smooth finish for shopping malls, offices, hotels & commercial complexes with long-lasting shine.",
    },
    {
      icon: <FaHome />,
      title: "Residential Walls",
      image: "/images/applications/residential.jpg",
      description:
        "Premium smooth interior & exterior finish for homes, villas, and apartments.",
    },
    {
      icon: <FaPaintRoller />,
      title: "Decorative Finishing",
      image: "/images/applications/decorative.jpg",
      description:
        "Designer walls & luxury textured white finish for modern interior designs.",
    },
    {
      icon: <FaWater />,
      title: "Waterproof Protection",
      image: "/images/applications/waterproof.jpg",
      description:
        "Excellent moisture resistance, weather-proof & crack-free protection for many years.",
    },
    {
      icon: <FaSpa />,
      title: "Industrial Applications",
      image: "/images/applications/industrial.jpg",
      description:
        "Trusted in factories, warehouses & plants for strong bonding & chemical resistance.",
    },
  ];

  return (
    <section
      id="applications"
      className="py-24 px-4 sm:px-8 bg-gradient-to-br from-white to-gray-100 text-center"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-16 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Applications of Magnum Lime Wash
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            className="relative group backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-white/30 bg-white/30 transition-transform duration-500 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.06, rotate: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-56 object-cover object-center transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Floating Icon */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-white text-yellow-500 rounded-full flex items-center justify-center shadow-xl text-3xl border border-yellow-300">
                {app.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {app.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {app.description}
              </p>
            </div>

            {/* Bottom Ribbon */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 p-3 text-white text-sm font-semibold tracking-wider shadow-inner"
              initial={{ y: 50 }}
              whileHover={{ y: 0 }}
            >
              ⭐ PREMIUM QUALITY APPLICATION ⭐
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
