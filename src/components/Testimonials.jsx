import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Gautam Kumar",
    text: "Magnum Cement delivered beyond expectations. My clients praised the strength and finish.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    company: "Kumar Constructions",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    rating: 5,
  },
  {
    name: "Ravi Kant Singh",
    text: "Quality and reliability define Magnum. Always on time and never a complaint.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    company: "Singh Infrastructure",
    logo: "https://cdn-icons-png.flaticon.com/512/619/619034.png",
    rating: 5,
  },
  {
    name: "Pooja Sharma",
    text: "Used for multiple housing projects. Magnum’s consistency and price make it unbeatable.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    company: "Sharma Developers",
    logo: "https://cdn-icons-png.flaticon.com/512/1042/1042344.png",
    rating: 4,
  },
  {
    name: "Akash Mehta",
    text: "Every structure we’ve built using Magnum has stood the test of time. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    company: "Mehta Builders",
    logo: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    rating: 5,
  },
  {
    name: "Nisha Verma",
    text: "Magnum’s cement mix has the perfect balance. It’s our top pick for residential projects.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    company: "Verma & Co.",
    logo: "https://cdn-icons-png.flaticon.com/512/3523/3523885.png",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
          💬 What Our Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Trusted by builders and contractors nationwide — here's what they have
          to say about Magnum Cement.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={testimonials.length > 1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={`testimonial-${i}`}>
              <motion.div
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl text-center max-w-xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t.image && (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="mx-auto w-24 h-24 rounded-full mb-4 object-cover border-4 border-yellow-500 shadow-md"
                  />
                )}

                <div className="flex justify-center mb-2">
                  {[...Array(t.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-lg" />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-4">
                  “{t.text}”
                </p>

                <h4 className="text-xl font-semibold text-gray-800 dark:text-yellow-400">
                  {t.name}
                </h4>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <img src={t.logo} alt="company logo" className="w-6 h-6" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {t.company}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
