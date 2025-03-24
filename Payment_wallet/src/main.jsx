// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Login from './Components/Login.jsx'
// import Register from './Components/Register.jsx'
// import Welcome from './Components/Welcome.jsx'
// import Counter from './Components/Counter.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Login/>
//     <Register/>
//     <Welcome/>
//     <Counter/>
//   </StrictMode>,
// )
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome"; // Now acts as Dashboard
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Welcome name="User" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
