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
    </div>
  );
}

export default App;
