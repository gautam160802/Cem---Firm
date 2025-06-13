// src/components/ProductCMS.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function ProductCMS() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "products"), form);
    setForm({ name: "", price: "", description: "", image: "" });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6">📦 Product CMS</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mb-10">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          ➕ Add Product
        </button>
      </form>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="border p-4 rounded shadow bg-white dark:bg-gray-800"
          >
            {prod.image && (
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-xl font-semibold">{prod.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {prod.description}
            </p>
            <p className="mt-2 font-bold">{prod.price}</p>
            <button
              onClick={() => handleDelete(prod.id)}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded"
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
