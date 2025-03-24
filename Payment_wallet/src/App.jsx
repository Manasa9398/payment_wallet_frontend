// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Welcome from './Components/Welcome'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Welcome name="john"/>
//     <Welcome name="sophia"/>

//     </>
//   )
// }

// // export default App

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Welcome from "./Components/Welcome";
// import Counter from "./Components/Counter";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/welcome" element={<Welcome />} />
//         <Route path="/counter" element={<Counter />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
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
