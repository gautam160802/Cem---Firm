import React, { useState } from "react";

export default function Register({ onClose }) {
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    alert("Registered successfully");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
        >
          Register
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
