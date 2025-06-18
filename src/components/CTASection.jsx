// src/components/CTASection.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="animate-smooth-bounce">
          Need Quality Lime Wash for Your Project?
        </h2>
        <p>
          Get the best Lime Wash at the best price. Serving all districts of UP
          & Bihar.
        </p>
        <a
          href="#contact"
          className="cta-button flex items-center justify-center gap-2"
        >
          <FaPhoneAlt /> Enquire Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
