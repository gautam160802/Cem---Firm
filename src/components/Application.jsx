// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";
// import { motion as _motion } from "framer-motion";

// const applications = [
//   { title: "Cement Wash", image: "/images/cement-wash.jpg" },
//   { title: "Cement Paint", image: "/images/cement-paint.jpg" },
//   { title: "Designer Flooring", image: "/images/designer-flooring.jpg" },
//   { title: "Mosaic Tiles", image: "/images/mosaic-tiles.jpg" },
//   { title: "Marble Flooring", image: "/images/marble-flooring.jpg" },
//   { title: "Paver Tiles", image: "/images/paver-tiles.jpg" },
// ];

// const Applications = () => {
//   return (
//     <_motion.section
//       id="applications"
//       className="py-24 bg-gradient-to-br from-yellow-50 to-white"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 font-serif">
//         Applications of Magnum Lime Wash
//       </h2>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         loop={true}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         modules={[Pagination, Autoplay]}
//         className="max-w-6xl mx-auto px-4"
//       >
//         {applications.map((app, index) => (
//           <SwiperSlide key={index}>
//             <_motion.div
//               whileHover={{ scale: 1.07 }}
//               className="bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl p-4 transition-all duration-300 cursor-pointer hover:shadow-2xl border border-yellow-100"
//             >
//               <img
//                 src={app.image}
//                 alt={app.title}
//                 className="w-full h-64 object-cover rounded mb-6"
//               />
//               <h3 className="text-2xl font-semibold text-gray-700">
//                 {app.title}
//               </h3>
//             </_motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="flex justify-center mt-16">
//         <a
//           href="#contact"
//           className="bg-yellow-500 text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 shadow-lg transition duration-300"
//         >
//           Request Quote
//         </a>
//       </div>
//     </_motion.section>
//   );
// };

// export default Applications;
