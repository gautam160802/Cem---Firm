export default function DealerLocator() {
  return (
    <section className="py-16 bg-gray-100 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Find a Dealer Near You</h2>
      <input
        type="text"
        placeholder="Enter your location"
        className="px-4 py-2 border rounded-md w-64"
      />
    </section>
  );
}
