import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };

    axios.post('http://localhost:5000/api/signup', user)
      .then(res => alert('Signup successful'))
      .catch(err => alert('Error signing up'));
  };

  return (
    <div className="signup-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="signup-card card p-4 shadow-lg border-0">
        <h3 className="text-center mb-3 fw-bold text-primary">Create Account ✨</h3>
        <p className="text-center text-muted mb-4">Sign up for a new Fast-Pay account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input
              type="text"
              id="name"
              className="form-control rounded-3"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">E-Mail</label>
            <input
              type="email"
              id="email"
              className="form-control rounded-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control rounded-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-3 shadow-sm">
            Sign Up
          </button>
        </form>

        <p className="mt-3 text-center text-muted">
          Already have an account? <Link to="/login" className="text-primary fw-semibold">Login</Link>
        </p>
      </div>

      <style>{`
        .signup-bg {
        background-color:rgb(147, 180, 208);()
        }

        .signup-card {
          width: 100%;
          max-width: 400px;
          background-color:rgb(233, 239, 242);
          border-radius: 20px;
        }

        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          border-color: #80bdff;
        }

        button:hover {
          background-color: #0069d9;
        }
      `}</style>
    </div>
  );
}
