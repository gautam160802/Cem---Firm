// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function EnquiryForm() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//     state: "",
//     district: "",
//     city: "",
//   });

//   const [data, setData] = useState({
//     states: [],
//     districts: [],
//     cities: [],
//   });

//   useEffect(() => {
//     axios
//       .get("https://cdn.jsdelivr.net/npm/indian-states-cities@1.0.0/india.json")
//       .then((res) => {
//         setData((prev) => ({ ...prev, states: res.data }));
//       });
//   }, []);

//   useEffect(() => {
//     const selected = data.states.find((s) => s.state === form.state);
//     if (selected) {
//       setData((prev) => ({
//         ...prev,
//         districts: selected.districts || [],
//         cities: [],
//       }));
//       setForm((prev) => ({ ...prev, district: "", city: "" }));
//     }
//   }, [form.state]);

//   useEffect(() => {
//     if (form.district) {
//       setData((prev) => ({
//         ...prev,
//         cities: [form.district + " City"], // Placeholder
//       }));
//     }
//   }, [form.district]);

//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Enquiry Submitted:", form);
//     alert("Form submitted! ✅");
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded my-10">
//       <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">
//         Enquiry Form
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           onChange={handleChange}
//           placeholder="Your Name"
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="tel"
//           name="phone"
//           onChange={handleChange}
//           placeholder="Phone Number"
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//         />
//         <textarea
//           name="message"
//           onChange={handleChange}
//           placeholder="Your Message"
//           className="w-full p-2 border rounded"
//           rows="3"
//         />

//         <select
//           name="state"
//           value={form.state}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select State</option>
//           {data.states.map((s, i) => (
//             <option key={i} value={s.state}>
//               {s.state}
//             </option>
//           ))}
//         </select>

//         <select
//           name="district"
//           value={form.district}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select District</option>
//           {data.districts.map((d, i) => (
//             <option key={i} value={d}>
//               {d}
//             </option>
//           ))}
//         </select>

//         <select
//           name="city"
//           value={form.city}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select City</option>
//           {data.cities.map((c, i) => (
//             <option key={i} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>

//         <button
//           type="submit"
//           className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
//         >
//           Submit Enquiry
//         </button>
//       </form>
//     </div>
//   );
// }
