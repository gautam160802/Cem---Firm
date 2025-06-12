import React, { useState } from "react";

export default function Login({ onClose, setUser }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    setUser({ name: "Gautam", email });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={onClose}
          className="mt-2 text-sm text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
