export default function Contact() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full mb-4 p-3 border rounded"
          rows="5"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
}
