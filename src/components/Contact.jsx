import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import locationData from "../assets/indiaStatesCities.json";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    city: "",
    message: "",
  });

  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // When state changes
  useEffect(() => {
    const selectedState = locationData.find(
      (stateObj) => stateObj.state === form.state
    );

    if (selectedState) {
      setDistricts(selectedState.districts || []);
      setForm((prev) => ({ ...prev, district: "", city: "" }));
      setCities([]);
    }
  }, [form.state]);

  // When district changes
  useEffect(() => {
    const selectedState = locationData.find(
      (stateObj) => stateObj.state === form.state
    );

    if (selectedState?.cities && form.district) {
      const matchedCities = selectedState.cities[form.district] || [];
      setCities(matchedCities);
      setForm((prev) => ({ ...prev, city: "" }));
    }
  }, [form.district, form.state]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "enquiries"), form);
      alert("✅ Enquiry submitted successfully!");
      setForm({
        name: "",
        phone: "",
        email: "",
        state: "",
        district: "",
        city: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting enquiry", err);
      alert("❌ Failed to submit enquiry.");
    }
  };

  return (
    <section className="px-6 py-12 bg-gray-100 dark:bg-gray-900" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            📍 Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Address:</strong> Magnum Cement Factory, Near Transport
            Nagar, Lucknow, UP – 226012
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Phone:</strong> +91-9876543210
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Email:</strong> info@ravikant123.com
          </p>
          <iframe
            title="Magnum Cement Map"
            src="https://www.google.com/maps?q=Lucknow+UP&output=embed"
            width="100%"
            height="250"
            className="rounded border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Enquiry Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            Enquiry Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border rounded"
              required
            />

            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select State</option>
              {locationData.map((stateObj, index) => (
                <option key={index} value={stateObj.state}>
                  {stateObj.state}
                </option>
              ))}
            </select>

            <select
              name="district"
              value={form.district}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 border rounded"
              rows="4"
              required
            />

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
