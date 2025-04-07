import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  BsPhone, BsTv, BsTrainFront, BsPlayBtn, BsCarFront, BsCreditCard2Back
} from 'react-icons/bs';

const contacts = ['9876543210', '9123456789', '9012345678'];
const plans = [
  { amount: 199, description: '1.5GB/day for 28 days' },
  { amount: 399, description: '2.5GB/day for 56 days' },
];

const Recharge = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleRecharge = () => {
    if (selectedNumber && selectedPlan) {
      alert(`✅ Recharged ${selectedNumber} with ₹${selectedPlan.amount}`);
    } else {
      alert('⚠️ Please select contact and plan!');
    }
  };

  return (
    <div className="recharge-page py-4">
      <Container>
        <h4 className="fw-bold mb-4 text-primary">Recharge & Bills</h4>

        {/* Contact Selection */}
        <div className="mb-4">
          <h6 className="text-secondary mb-2">Select Contact</h6>
          <Row className="g-3">
            {contacts.map((num, idx) => (
              <Col xs={6} md={4} key={idx}>
                <Card
                  className={`contact-card shadow-sm ${selectedNumber === num ? 'selected' : ''}`}
                  onClick={() => setSelectedNumber(num)}
                >
                  <Card.Body className="text-center py-3">
                    <strong>{num}</strong>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Recharge Plans */}
        <div className="mb-4">
          <h6 className="text-secondary mb-2">Recommended Plans</h6>
          <Row className="g-3">
            {plans.map((plan, i) => (
              <Col xs={6} md={4} key={i}>
                <Card
                  className={`plan-card shadow-sm ${selectedPlan === plan ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <Card.Body>
                    <h5 className="text-primary">₹{plan.amount}</h5>
                    <p className="text-muted small mb-0">{plan.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Recharge Button */}
        <div className="text-center mb-5">
          <Button
            variant="primary"
            size="lg"
            className="rounded-pill px-5"
            onClick={handleRecharge}
          >
            Recharge Now
          </Button>
        </div>

        {/* Recharge Categories */}
        <div className="mb-4">
          <h6 className="text-secondary mb-3">Recharge & Bill Categories</h6>
          <Row className="g-3 text-center">
            {[
              { icon: <BsPhone size={26} />, label: "Mobile" },
              { icon: <BsTv size={26} />, label: "DTH" },
              { icon: <BsTrainFront size={26} />, label: "Metro" },
              { icon: <BsPlayBtn size={26} />, label: "Google Play" },
              { icon: <BsCarFront size={26} />, label: "FASTag" },
              { icon: <BsCreditCard2Back size={26} />, label: "Credit Card" },
            ].map((cat, idx) => (
              <Col xs={4} md={2} key={idx}>
                <Card className="category-card shadow-sm h-100">
                  <Card.Body className="text-center py-3">
                    {cat.icon}
                    <p className="small mt-2 mb-0">{cat.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* Styles */}
      <style>{`
        .recharge-page {
          background-color: #f5f8ff;
          min-height: 100vh;
        }

        .contact-card, .plan-card, .category-card {
          border-radius: 16px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          background-color: #ffffff;
        }

        .contact-card:hover, .plan-card:hover, .category-card:hover {
          transform: scale(1.02);
          border-color: #cce4ff;
        }

        .selected {
          border: 2px solid #007bff !important;
        }

        h4, h6 {
          font-family: 'Segoe UI', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Recharge;
