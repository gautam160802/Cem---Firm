import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-20 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Details + Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <p className="mb-4 text-gray-600">
            📍 <strong>Address:</strong> Magnum Industries, Gomti Nagar,
            Lucknow, UP - 226010
          </p>
          <p className="mb-4 text-gray-600">
            📞 <strong>Phone:</strong> +91 9598808287
          </p>
          <p className="mb-4 text-gray-600">
            ✉️ <strong>Email:</strong> contact@ravikantsingh123.com
          </p>
          <p className="mb-6 text-gray-600">
            ⏰ <strong>Working Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM
          </p>

          {/* Enquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        {/* Google Map for Lucknow */}
        <div className="w-full h-64 md:h-full">
          <iframe
            className="w-full h-full rounded shadow"
            title="Google Map - Lucknow"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.248660634731!2d80.99609751504397!3d26.846693783161223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3c9c23b2e03%3A0x79eb4e1f4bb05b85!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718222222222!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
