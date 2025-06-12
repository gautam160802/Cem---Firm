import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => alert("Message Sent!"),
        (error) => alert("Something went wrong.")
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <form ref={form} onSubmit={sendEmail} className="mt-10 space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
