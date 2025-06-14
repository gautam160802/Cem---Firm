import React, { useState, useEffect } from "react";
import indiaData from "../assets/indiaStatesCities.json";
import { db } from "../firebase"; // Adjust path to your Firebase setup
import { collection, addDoc, Timestamp } from "firebase/firestore";

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
      setSuccessMsg("🎉 Your enquiry has been sent successfully!");
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
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info + Map */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Get in Touch
          </h3>
          <p className="mb-4 text-gray-600">
            We are happy to help you with your cement needs across Uttar Pradesh
            and Bihar. Please fill out the form and we’ll get back to you soon.
          </p>

          <div className="space-y-3 text-gray-600 mb-6">
            <p>
              <strong>Phone:</strong> +91-9876543210
            </p>
            <p>
              <strong>Email:</strong> info@gautamcement.com
            </p>
            <p>
              <strong>Address:</strong> PLOT NO.111, TIWARIGANJ , INDUSTRIAL
              AREA, AYODHYA ROAD , LUCKNOW 226028 (U.P)
            </p>
          </div>

          {/* Embedded Map */}
          <iframe
            title="Lucknow Map"
            src="https://maps.google.com/maps?q=lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 border rounded shadow-md"
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Right: Enquiry Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4"
        >
          <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
            📝 Enquiry Form
          </h3>

          {successMsg && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
              {successMsg}
            </div>
          )}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded"
          />

          {/* Dropdowns */}
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
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
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select District</option>
            {districts.map((district, idx) => (
              <option key={idx} value={district}>
                {district}
              </option>
            ))}
          </select>

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="">Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="w-full px-4 py-2 border rounded"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
