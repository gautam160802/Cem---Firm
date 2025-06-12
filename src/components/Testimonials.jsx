import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gray-100"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Testimonials
      </h2>
      <div className="max-w-3xl mx-auto">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded shadow text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="mx-auto w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-600 mb-2 italic">"{t.text}"</p>
                <h4 className="font-semibold">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
