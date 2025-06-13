import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20" data-aos="fade-up">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <img src="/factory.jpg" alt="Factory" className="rounded shadow" />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">About Magnum</h2>
          <p>
            Magnum is a trusted name in construction, providing top-grade cement
            to power strong, lasting buildings. Our commitment to quality
            ensures durability and strength, empowering infrastructure and
            development across regions.
          </p>
        </div>
      </div>
    </section>
  );
}
