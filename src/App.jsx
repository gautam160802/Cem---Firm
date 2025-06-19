import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminLogin from "./components/AdminLogin";

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

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen">
      <ThemeToggle />

      <Navbar user={user} onLogout={() => setUser(null)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
