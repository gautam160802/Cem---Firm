import React, { useState } from "react";

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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          🧱 Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 text-sm rounded-full shadow-lg">
                  {product.price}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-yellow-400">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
