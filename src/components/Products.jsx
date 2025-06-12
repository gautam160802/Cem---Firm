export default function Products() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {["OPC 53 Grade", "PPC Cement", "PSC Cement"].map((product, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{product}</h3>
            <p>
              High strength and reliability for all your construction needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
