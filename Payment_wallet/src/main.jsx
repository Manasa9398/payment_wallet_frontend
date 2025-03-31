import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";
import Counter from "./Components/Counter";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Welcome" element={<Welcome name="User" />} />
        <Route path="/Counter" element={<Counter />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
