import React from "react";
import ReactDOM from "react-dom/client";
import ElectionApp from "./App.jsx";

// This is the entry point of the application.
// It finds the <div id="root"> in index.html and mounts the ElectionApp component inside it.
// React.StrictMode adds extra development-time checks for common mistakes.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ElectionApp />
  </React.StrictMode>
);
