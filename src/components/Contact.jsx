import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion as _motion } from "framer-motion";
import emailjs from "emailjs-com"; // install: npm install emailjs-com

export default function Contact() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call emailjs here to send email
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: name,
          email: email,
          message: message,
        },
        "YOUR_USER_ID"
      )
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong!");
      });
  };

  return (
    <motion.section
      id="contact"
      className="p-10 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold font-serif text-gray-800 mb-2">
        Contact Us
      </h2>
      <div className="h-1 w-16 bg-yellow-600 rounded mx-auto mb-4"></div>

      {/* Contact Info */}
      <div className="space-y-4 text-gray-600 text-lg mb-8">
        <p className="flex items-center justify-center gap-2">
          <MdEmail className="text-yellow-600" />
          <a
            href="mailto:abc.cement@gmail.com"
            className="text-blue-600 underline"
          >
            abc.cement@gmail.com
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdPhone className="text-yellow-600" /> +91 9876543210
        </p>
        <p className="flex items-center justify-center gap-2">
          <MdLocationOn className="text-yellow-600" /> Patna, Bihar
        </p>
      </div>

      {/* Enquiry Form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
