import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };

    axios.post('http://localhost:5000/api/login', user)
      .then(res => {
        const { upi_id, message, balance } = res.data;
        localStorage.setItem('user', JSON.stringify({ email, upi_id, balance }));
        alert(message);
        navigate('/');
        window.location.reload();
      })
      .catch(err => alert('Error logging in'));
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-card card p-4 shadow-lg border-0">
        <h3 className="text-center mb-4 fw-bold text-primary">Welcome Back 👋</h3>
        <p className="text-center text-muted mb-4">Login to your Digital Payment</p>

        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>

        <p className="mt-3 text-center text-muted">
          Don’t have an account? <Link to="/signup" className="text-primary fw-semibold">Sign Up</Link>
        </p>
      </div>

      <style>{`
        .login-bg {
          background-color:rgb(147, 180, 208);
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          background-color:rgb(233, 239, 242);
          border-radius: 20px;
        }

        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          border-color:rgb(38, 140, 248);
        }

        button:hover {
          background-color: #0069d9;
        }
      `}</style>
    </div>
  );
}
