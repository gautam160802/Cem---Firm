import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
// import WhatsAppButton from "./components/WhatsAppButton";
import FloatingContactButtons from "./components/FloatingContactButtons";
import { useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="font-sans">
      <Navbar
        user={user}
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
        onLogout={() => setUser(null)}
      />

      {showLogin && (
        <Login onClose={() => setShowLogin(false)} setUser={setUser} />
      )}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}

      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <WhatsAppButton /> */}
      <FloatingContactButtons />
    </div>
  );
}

export default App;
