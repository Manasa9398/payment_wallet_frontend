// import React from 'react'

// const Welcome=(props)=> {
//   return (
//     <h3>welcome {props.name}</h3>

// )
// }

// export default Welcome
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
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
