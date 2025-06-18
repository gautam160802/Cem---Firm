import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion as _motion } from "framer-motion";

const applications = [
  { title: "Cement Wash", image: "/images/cement-wash.jpg" },
  { title: "Cement Paint", image: "/images/cement-paint.jpg" },
  { title: "Designer Flooring", image: "/images/designer-flooring.jpg" },
  { title: "Mosaic Tiles", image: "/images/mosaic-tiles.jpg" },
  { title: "Marble Flooring", image: "/images/marble-flooring.jpg" },
  { title: "Paver Tiles", image: "/images/paver-tiles.jpg" },
];

const Applications = () => {
  return (
    <_motion.section
      className="py-20 bg-gradient-to-r from-yellow-100 to-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14 font-serif">
        Applications of Our Products
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto px-4"
      >
        {applications.map((app, index) => (
          <SwiperSlide key={index}>
            <_motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-4 text-center transition-all duration-300 cursor-pointer hover:shadow-2xl border hover:border-yellow-500"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {app.title}
              </h3>
            </_motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-12">
        <a
          href="#contact"
          className="bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-yellow-700 transition duration-300 shadow-lg"
        >
          Get a Quote
        </a>
      </div>
    </_motion.section>
  );
};

export default Applications;
