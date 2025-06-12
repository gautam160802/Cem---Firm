import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <p className="mb-4 text-gray-600">
            📍 <strong>Address:</strong> Magnum Industries, Industrial Area,
            Lucknow, Uttar Pradesh(UP) - 226005
          </p>
          <p className="mb-4 text-gray-600">
            📞 <strong>Phone:</strong> +91 9598808287
          </p>
          <p className="mb-4 text-gray-600">
            ✉️ <strong>Email:</strong> contact@magnumcem.com
          </p>
          <p className="text-gray-600">
            ⏰ <strong>Working Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM
          </p>
        </div>

        {/* Google Map */}
        <div className="w-full h-64 md:h-full">
          <iframe
            className="w-full h-full rounded shadow"
            title="Google Map"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28776.211135336282!2d85.09737493158227!3d25.59409483771559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed586f20a30f85%3A0x88a13db30a1df3d0!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1718180400000!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
