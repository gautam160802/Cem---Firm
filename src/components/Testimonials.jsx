import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination /*, Autoplay */ } from "swiper/modules";

const testimonials = [
  {
    name: "RaviKant Singh",
    text: "Magnum cement made our building solid and durable. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Gautam Kumar",
    text: "We use only Magnum for all our projects. Best quality and support.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Pooja Sharma",
    text: "Great cement and on-time delivery. Trustworthy supplier!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        💬 What Our Clients Say
      </h2>
      <div className="max-w-3xl mx-auto">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination /*, Autoplay */]}
          autoplay={{ delay: 4000 }} // uncomment to enable autoplay
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="mx-auto w-20 h-20 rounded-full mb-4 object-cover border-4 border-yellow-500"
                />
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  “{t.text}”
                </p>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
