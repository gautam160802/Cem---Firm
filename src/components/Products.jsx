import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Rose Putty",
    description:
      "High-quality rose putty providing smooth finish & strong bonding for walls and ceilings.",
    price: "₹450 / bag",
    image: "/images/rose-putty.jpg",
  },
  {
    id: 2,
    name: "Lemon Putty",
    description:
      "Premium lemon putty with excellent whiteness and surface coverage for interior walls.",
    price: "₹480 / bag",
    image: "/images/lemon-putty.jpg",
  },
  {
    id: 3,
    name: "Sandalwood Putty",
    description:
      "Smooth finish sandalwood putty with extra durability for both interior & exterior surfaces.",
    price: "₹500 / bag",
    image: "/images/sandalwood-putty.jpg",
  },
];

export default function Products() {
  return (
    <motion.section
      id="products"
      className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">
          🧱 Our Premium Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our finest grade of putty products engineered for beautiful
          finish, durability, and long-lasting performance.
        </p>
      </div>

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
        className="max-w-6xl mx-auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 border hover:border-yellow-500"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-1 text-sm rounded-full shadow-md">
                  {product.price}
                </span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
