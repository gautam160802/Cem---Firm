import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import DealerLocator from "./components/DealerLocator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Products />
      <DealerLocator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
