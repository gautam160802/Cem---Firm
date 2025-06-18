import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminDashboard from "./components/AdminDashboard";

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
      <ThemeToggle />

      <div className="font-sans bg-white text-gray-800">
        <AdminDashboard />
      </div>

      <Navbar
        user={user}
        onLogin={() => setShowLogin(true)}
        onRegister={() => setShowRegister(true)}
        onLogout={() => setUser(null)}
      />

      {/* Show popup login/register modals */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} setUser={setUser} />
      )}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
