import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import Recharge from './pages/Recharge';
import BillPay from './pages/BillPay';
import SendMoney from './pages/SendMoney';
import History from './pages/History';
import Wallet from './pages/Wallet';
import Rewards from './pages/Rewards';
import Offers from './pages/Offers';
import ScanPay from './pages/ScanPay';
import Transaction from './pages/transaction';
import ReferEarn from "./pages/ReferEarn";
import CreditBill from "./pages/CreditBill";
import Bank from './pages/Bank'; 
import RentPayment from "./pages/RentPayment";




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="md" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="bi bi-wallet2"></i> Digital Payment
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
          <Navbar.Collapse id="navbar-nav" in={isOpen}>
            <Nav className="ms-auto">
              {user ? (
                <>
                  <NavDropdown 
                    title={<><i className="bi bi-person-circle"></i> {user.email}</>} 
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <i className="bi bi-person-plus-fill"></i> Signup
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/billpay" element={<BillPay />} />
        <Route path="/sendmoney" element={<SendMoney />} />
        <Route path="/history" element={<History />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/scanpay" element={<ScanPay />} />
        <Route path="/refer-earn" element={<ReferEarn />} />
        <Route path="/CreditBill" element={<CreditBill />} />
        <Route path="/rentpayment" element={<RentPayment />} />
        <Route path="/bank" element={<Bank />} />


        

      </Routes>
    </Router>
  );
}

export default App;
