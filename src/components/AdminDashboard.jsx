import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "enquiries"),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => {
          const enquiryData = doc.data();

          // Handle createdAt conversion safely
          let createdAt = "N/A";
          if (enquiryData.createdAt && enquiryData.createdAt.toDate) {
            createdAt = enquiryData.createdAt.toDate().toLocaleString();
          }

          return {
            id: doc.id,
            ...enquiryData,
            createdAtFormatted: createdAt,
          };
        });
        console.log("Fetched Data:", data);
        setEnquiries(data);
      } catch (err) {
        console.error("Firestore Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-10 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
        📊 Admin Dashboard - Enquiries
      </h2>

      {loading ? (
        <div className="text-center text-lg font-semibold text-gray-600">
          Loading enquiries...
        </div>
      ) : enquiries.length === 0 ? (
        <div className="text-center text-lg font-semibold text-gray-600">
          No enquiries found yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-yellow-600 text-white">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">State</th>
                <th className="py-3 px-4">District</th>
                <th className="py-3 px-4">City</th>
                <th className="py-3 px-4">Pincode</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr
                  key={enquiry.id}
                  className="text-center border-b hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{enquiry.name}</td>
                  <td className="py-3 px-4">{enquiry.phone}</td>
                  <td className="py-3 px-4">{enquiry.state}</td>
                  <td className="py-3 px-4">{enquiry.district}</td>
                  <td className="py-3 px-4">{enquiry.city}</td>
                  <td className="py-3 px-4">{enquiry.pincode}</td>
                  <td className="py-3 px-4">{enquiry.message}</td>
                  <td className="py-3 px-4">{enquiry.createdAtFormatted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
