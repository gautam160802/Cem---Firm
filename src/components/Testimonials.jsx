import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Amit Sharma",
      position: "Civil Contractor, Uttar Pradesh",
      quote:
        "Magnum Lime Wash completely changed my building projects. The smoothness and whiteness are unmatched. My clients love the results!",
      image: "/images/testimonials/client1.jpg",
    },
    {
      name: "Pooja Mehta",
      position: "Interior Designer, Bihar",
      quote:
        "I always recommend Magnum Lime Wash for luxury interiors. The finish is beautiful, durable, and truly premium.",
      image: "/images/testimonials/client2.jpg",
    },
    {
      name: "Vikram Singh",
      position: "Real Estate Developer",
      quote:
        "We use Magnum Lime Wash across all our projects now. Best quality, best service, and it elevates the entire look of our buildings.",
      image: "/images/testimonials/client3.jpg",
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-r from-white via-yellow-50 to-white text-center"
      id="testimonials"
    >
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What Our Customers Say
      </motion.h2>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-xl border hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full border-4 border-yellow-500 shadow-md object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-700">{review.name}</h3>
            <p className="text-sm text-yellow-600 font-semibold mb-2">
              {review.position}
            </p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              {review.quote}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden max-w-md mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 1000 }}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-xl border mx-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-24 h-24 rounded-full border-4 border-yellow-500 shadow-md object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-700">
                  {review.name}
                </h3>
                <p className="text-sm text-yellow-600 font-semibold mb-2">
                  {review.position}
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {review.quote}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
