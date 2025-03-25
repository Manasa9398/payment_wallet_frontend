import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Digital Wallet</h1>
      <p>Secure payments, instant transactions, and more.</p>
      <Link to="/login" className="btn btn-primary me-2">
        Login
      </Link>
      <Link to="/register" className="btn btn-success">
        Register
      </Link>
    </div>
  );
}

export default App;
