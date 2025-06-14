import React, { useState } from "react";
import { motion as _motion } from "framer-motion";

const dummyProducts = [
  {
    id: 1,
    name: "Magnum PPC",
    description: "Perfect for general construction with extra durability.",
    price: "₹320 / bag",
    image:
      "https://images.pexels.com/photos/28359708/pexels-photo-28359708.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
  },
  {
    id: 2,
    name: "Magnum OPC",
    description: "High strength for major structural projects.",
    price: "₹350 / bag",
    image:
      "https://images.pexels.com/photos/4710933/pexels-photo-4710933.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
  },
  {
    id: 3,
    name: "Magnum RapidSet",
    description: "Fast-setting cement for quick repairs and small projects.",
    price: "₹375 / bag",
    image:
      "https://images.pexels.com/photos/7193962/pexels-photo-7193962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
  },
];

export default function Products() {
  const [products] = useState(dummyProducts);

  return (
    <section
      id="products"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
          🧱 Our Premium Products
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12">
          Choose from our top-grade cement options designed to ensure strength,
          durability, and faster setting for every kind of project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <_motion.div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-1 text-sm rounded-full shadow-md">
                  {product.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-yellow-400 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {product.description}
                </p>
              </div>
            </_motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
