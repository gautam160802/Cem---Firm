import React, { useState } from "react";

const dummyProducts = [
  {
    id: 1,
    name: "Magnum PPC",
    description: "Perfect for general construction with extra durability.",
    image:
      "https://images.pexels.com/photos/28359708/pexels-photo-28359708.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
  },
  {
    id: 2,
    name: "Magnum OPC",
    description: "High strength for major structural projects.",
    image:
      "https://images.pexels.com/photos/4710933/pexels-photo-4710933.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
  },
  {
    id: 3,
    name: "Magnum RapidSet", // Example new product
    description: "Fast-setting cement for quick repairs and small projects.",
    image:
      "https://images.pexels.com/photos/7193962/pexels-photo-7193962.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1", // New cracked wall image
  },
];

export default function Products() {
  const [products] = useState(dummyProducts);

  return (
    <section id="products" className="py-20 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
