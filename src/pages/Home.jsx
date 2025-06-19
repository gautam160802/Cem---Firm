// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FloatingContactButtons from "../components/FloatingContactButtons";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Applications from "../components/Application";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Applications />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Contact />
      <FloatingContactButtons />
      <Footer />
    </>
  );
}
