import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Products />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
