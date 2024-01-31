import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Polyfill para desplazamiento suave
if ("scrollBehavior" in document.documentElement.style === false) {
  (async () => {
    const smoothscroll = await import("smoothscroll-polyfill");
    smoothscroll.polyfill();
  })();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
