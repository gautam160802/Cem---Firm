import React from "react";
import { motion as _motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Image with motion */}
        <_motion.img
          src="/factory.jpg"
          alt="Magnum Cement Factory"
          className="rounded-lg shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Content */}
        <_motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-yellow-500">Magnum</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Magnum Cement</strong> is a trusted name in construction,
            delivering
            <span className="text-yellow-600 font-medium">
              {" "}
              top-grade cement{" "}
            </span>
            engineered for strength and longevity. Backed by quality assurance
            and modern infrastructure, we help build
            <span className="font-medium text-gray-900">
              {" "}
              stronger, more sustainable buildings
            </span>{" "}
            across India.
          </p>
          <p className="text-gray-600">
            From homes to highways, our cement is at the core of countless
            projects — empowering progress, region by region.
          </p>
        </_motion.div>
      </div>
    </section>
  );
}
