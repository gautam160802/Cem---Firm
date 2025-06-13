// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FloatingContactButtons from "../components/FloatingContactButtons";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <FloatingContactButtons />
      <Footer />
    </>
  );
}
