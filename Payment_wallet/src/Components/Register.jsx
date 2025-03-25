// import React from 'react'

// function Register() {
//   return (
//     <div>
//         <h2>Register page</h2>
//         <p>welcome to the registration page</p>
//     </div>
//   )
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     alert("Registration Successful!");
//     navigate("/");
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={handleRegister}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button className="btn btn-success w-100">Register</button>
//         </form>
//         <p className="text-center mt-3">
//           Already have an account? <a href="/">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import Axios for API requests
// import "bootstrap/dist/css/bootstrap.min.css";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/register", {
//         email,
//         password,
//       });

//       alert(response.data.message); // Show success message
//       navigate("/"); // Redirect to login page
//     } catch (error) {
//       alert(error.response?.data?.message || "Registration failed!");
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={handleRegister}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100">Register</button>
//         </form>
//         <p className="text-center mt-3">
//           Already have an account? <a href="/">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to handle registration
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", {
        email,
        password,
      });

      console.log("Response:", response.data); // Debugging
      alert(response.data.message); // Show success message
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Error:", error.response || error.message); // Debugging
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
