import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

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
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Applications of Our Products
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {applications.map((app, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded shadow p-4 text-center">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {app.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Applications;
