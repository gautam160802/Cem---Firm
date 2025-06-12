import React from "react";

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Our Products
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Premium Cement", "Rapid Hardening", "Eco Cement"].map(
            (product, idx) => (
              <div key={idx} className="p-6 shadow-md rounded bg-white">
                <h3 className="text-xl font-semibold">{product}</h3>
                <p className="mt-2 text-gray-600">
                  High strength and durability for all your construction needs.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
