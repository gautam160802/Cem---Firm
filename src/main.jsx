import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Wrapping AOS initialization in a component ensures it runs only once when app starts
function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // only animate once per element
    });
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
