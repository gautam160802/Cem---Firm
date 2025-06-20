import React, { useState, useEffect } from "react";
import indiaData from "../assets/indiaStatesCities.json";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    message: "",
  });

  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const stateData = indiaData.find((item) => item.state === formData.state);
    setDistricts(stateData ? stateData.districts : []);
    setFormData((prev) => ({ ...prev, district: "", city: "" }));
    setCities([]);
  }, [formData.state]);

  useEffect(() => {
    const stateData = indiaData.find((item) => item.state === formData.state);
    const cityData = stateData?.cities?.[formData.district] || [];
    setCities(cityData);
    setFormData((prev) => ({ ...prev, city: "" }));
  }, [formData.district]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      await emailjs.send(
        "service_b0ersvj",
        "template_8rbwdsr",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          state: formData.state,
          district: formData.district,
          city: formData.city,
          pincode: formData.pincode,
          message: formData.message,
        },
        "XmgCc8xO0IdU1SJ7A"
      );

      setSuccessMsg("🎉 Your enquiry has been submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        state: "",
        district: "",
        city: "",
        pincode: "",
        message: "",
      });
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-500 mb-6">
              Reach out to us for your White Lime Wash requirements. We're
              serving across Uttar Pradesh, Bihar and PAN India.
            </p>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                <strong>📞 Phone:</strong> +91-9598808287
              </p>
              <p>
                <strong>✉️ Email:</strong> info@gautamLimeWash.com
              </p>
              <p>
                <strong>📍 Address:</strong> TIWARIGANJ, INDUSTRIAL AREA,
                LUCKNOW (U.P)
              </p>
            </div>

            <div className="mt-8">
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-lg shadow"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8 space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-700 text-center mb-6">
              📝 Enquiry Form
            </h3>

            {successMsg && (
              <div className="bg-green-500 text-white py-3 px-6 rounded text-center font-medium shadow">
                {successMsg}
              </div>
            )}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg"
            />

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Select State</option>
              {indiaData.map((item, idx) => (
                <option key={idx} value={item.state}>
                  {item.state}
                </option>
              ))}
            </select>

            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Select District</option>
              {districts.map((district, idx) => (
                <option key={idx} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="w-full p-3 border rounded-lg"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg resize-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg shadow-md hover:scale-105 transition-all"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
