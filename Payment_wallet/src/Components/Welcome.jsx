import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const navigate = useNavigate();

 
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login"); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="container mt-5 text-center">
      <h3>Welcome, {props.name}!</h3>
      <p>You have successfully logged in to your dashboard.</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Welcome;
