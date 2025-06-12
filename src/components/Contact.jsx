import React, { useEffect, useState } from "react";
import axios from "axios";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

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

  const [data, setData] = useState({
    states: [],
    districts: [],
    cities: [],
  });

  useEffect(() => {
    axios
      .get("https://cdn.jsdelivr.net/npm/indian-states-cities@1.0.0/india.json")
      .then((res) => {
        setData((prev) => ({ ...prev, states: res.data }));
      });
  }, []);

  useEffect(() => {
    const selected = data.states.find((s) => s.state === form.state);
    if (selected) {
      setData((prev) => ({
        ...prev,
        districts: selected.districts || [],
        cities: [],
      }));
      setForm((prev) => ({ ...prev, district: "", city: "" }));
    }
  }, [form.state]);

  useEffect(() => {
    if (form.district) {
      setData((prev) => ({
        ...prev,
        cities: [form.district + " City"],
      }));
    }
  }, [form.district]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "enquiries"), form);
      alert("✅ Your enquiry has been submitted!");
      setForm({
        name: "",
        phone: "",
        email: "",
        state: "",
        district: "",
        city: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding enquiry:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="px-6 py-12 bg-gray-100 dark:bg-gray-900" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            📍 Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Address:</strong> Magnum Cement Factory, Near Transport
            Nagar, Lucknow, Uttar Pradesh – 226012
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Phone:</strong> +91-9876543210
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Email:</strong> info@ravikant123.com
          </p>

          <iframe
            title="Map to Magnum"
            src="https://www.google.com/maps?q=Lucknow+UP&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>

        {/* Updated Enquiry Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            Enquiry Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
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
              {data.states.map((s, i) => (
                <option key={i} value={s.state}>
                  {s.state}
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
              {data.districts.map((d, i) => (
                <option key={i} value={d}>
                  {d}
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
              {data.cities.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <textarea
              name="message"
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
