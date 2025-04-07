import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  const moneyTransfers = [
    { emoji: "📥", label: "Scan&Pay", link: "/ScanPay" },
    { emoji: "💸", label: "Send Money", link: "/transaction" },
    { emoji: "🏦", label: "Bank Transfer", link: "/Bank" },
  ];

  const topShortcuts = [
    { emoji: "💳", label: "Cards", link: "/CreditBill" },
    { emoji: "🏦", label: "Bank Accounts", link: "/Bank" },
    { emoji: "⚙️", label: "UPI Settings", link: "/upi-settings" },
  ];

  const categories = [
    {
      emoji: "📱",
      title: "Mobile Recharge",
      desc: "Prepaid & Postpaid",
      link: "/recharge",
      badge: "20% OFF",
    },
    {
      emoji: "💡",
      title: "Electricity Bill",
      desc: "All Providers",
      link: "/BillPay",
    },
    {
      emoji: "🏠",
      title: "Rent Payment",
      desc: "Pay House Rent",
      link: "/RentPayment",
    },
    {
      emoji: "🎁",
      title: "Offers & Rewards",
      desc: "View Cashback Deals",
      link: "/offers",
    },
    {
      emoji: "🧾",
      title: "History",
      desc: "All Transactions",
      link: "/History",
    },
    {
      emoji: "👛",
      title: "My Wallet",
      desc: "Check Balance",
      link: "/Wallet",
    },
  ];

  return (
    <div className="blue-bg text-black pb-5">
      <Container className="py-4">
        {/* Top Banner */}
        <div className="top-banner text-center p-4 mb-4">
          <h5 className="fw-bold text-white">Pay Credit Card Bills</h5>
          <p className="small text-white">Fetch & Settle instantly on Fast-Pay</p>
          <Link to="/CreditBill" className="btn btn-outline-light btn-sm rounded-pill">
            Check Your Bill
          </Link>
        </div>

        {/* Money Transfers */}
        <h6 className="text-secondary mb-3">Money Transfers</h6>
        <Row className="text-center mb-4">
          {moneyTransfers.map((item, idx) => (
            <Col xs={4} key={idx}>
              <Link to={item.link} className="text-decoration-none">
                <div className="icon-circle bg-primary text-white mx-auto mb-2">{item.emoji}</div>
                <div className="small fw-semibold text-dark">{item.label}</div>
              </Link>
            </Col>
          ))}
        </Row>

        {/* Explore Services */}
        <h6 className="text-secondary mb-3">Explore Services</h6>
        <Row>
          {categories.map((item, idx) => (
            <Col xs={6} sm={4} md={4} key={idx} className="mb-3">
              <Link to={item.link} className="text-decoration-none">
                <Card className="category-card h-100 p-3 shadow-sm">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1 text-primary fw-bold">{item.title}</h6>
                      <p className="small text-muted mb-1">{item.desc}</p>
                      {item.badge && (
                        <span className="badge bg-info text-dark">{item.badge}</span>
                      )}
                    </div>
                    <div style={{ fontSize: "2rem" }}>{item.emoji}</div>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        {/* Manage Payment Methods */}
        <h6 className="text-secondary mb-3">Manage Payment Methods</h6>
        <Row className="text-center mb-4">
          {topShortcuts.map((item, idx) => (
            <Col xs={4} key={idx}>
              <Link to={item.link} className="text-decoration-none">
                <div className="icon-circle bg-info text-white mx-auto mb-2">{item.emoji}</div>
                <div className="small fw-semibold text-dark">{item.label}</div>
              </Link>
            </Col>
          ))}
        </Row>
        {/* Rewards Section */}
<h6 className="text-secondary mb-3">Rewards</h6>
<Row className="text-center mb-4">
  <Col xs={12}>
    <Link to="/refer-earn" className="text-decoration-none">
      <Card className="category-card p-3 text-start shadow-sm">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1 text-primary fw-bold">Refer & Earn</h6>
            <p className="small text-muted mb-0">Invite friends & earn rewards</p>
          </div>
          <div style={{ fontSize: "2rem" }}>🎉</div>
        </div>
      </Card>
    </Link>
  </Col>
</Row>

      </Container>

      {/* Bottom Navigation Bar */}
      <div className="bottom-nav">
        <Link to="/home" className="text-center">
          <div className="nav-icon">🏠</div>
          <small>Home</small>
        </Link>
        <Link to="/recharge" className="text-center">
          <div className="nav-icon">🔋</div>
          <small>Recharge</small>
        </Link>
        <Link to="/transaction" className="text-center">
          <div className="nav-icon">💸</div>
          <small>Send</small>
        </Link>
        <Link to="/Wallet" className="text-center">
          <div className="nav-icon">👛</div>
          <small>Wallet</small>
        </Link>
        <Link to="/Profile" className="text-center">
          <div className="nav-icon">🧾</div>
          <small>Profile</small>
        </Link>
      </div>
    </div>
  );
};

export default Home;
