import React from "react";
import {
  FaBuilding,
  FaHome,
  FaPaintRoller,
  FaWater,
  FaSpa,
} from "react-icons/fa";

export default function Applications() {
  const applications = [
    {
      icon: <FaBuilding />,
      title: "Commercial Buildings",
      description:
        "Smooth finish for shopping malls, offices, hotels & commercial complexes with long-lasting shine.",
    },
    {
      icon: <FaHome />,
      title: "Residential Walls",
      description:
        "Premium smooth interior & exterior finish for homes, villas, and apartments.",
    },
    {
      icon: <FaPaintRoller />,
      title: "Decorative Finishing",
      description:
        "Designer walls & luxury textured white finish for modern interior designs.",
    },
    {
      icon: <FaWater />,
      title: "Waterproof Protection",
      description:
        "Excellent moisture resistance, weather-proof & crack-free protection for many years.",
    },
    {
      icon: <FaSpa />,
      title: "Industrial Applications",
      description:
        "Trusted in factories, warehouses & plants for strong bonding & chemical resistance.",
    },
  ];

  return (
    <section
      id="applications"
      className="py-24 px-6 bg-gradient-to-br from-white to-gray-100 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-16 text-gray-800">
        Applications of Magnum Lime Wash
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {applications.map((app, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-lg rounded-xl p-10 shadow-xl border hover:scale-105 transition duration-300"
          >
            {/* Circular Floating Icon */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shadow-lg text-4xl">
                {app.icon}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              {app.title}
            </h3>
            <p className="text-gray-500 text-base leading-relaxed">
              {app.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
