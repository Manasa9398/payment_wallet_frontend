import React, { useState } from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';

const RentPayment = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePayment = () => {
    if (name && amount && upiId) {
      alert(`🏠 Rent of ₹${amount} sent to ${name} (${upiId})`);
    } else {
      alert('⚠️ Please fill all fields!');
    }
  };

  return (
    <div className="rent-page py-4">
      <Container>
        <h4 className="fw-bold mb-4 text-primary">Pay Rent</h4>
        <Card className="p-4 shadow-sm rent-card">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Landlord Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter landlord's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>UPI ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. landlord@bank"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" className="w-100 rounded-pill" onClick={handlePayment}>
              Pay Rent Now
            </Button>
          </Form>
        </Card>
      </Container>

      <style>{`
        .rent-page {
          background-color: #f5f8ff;
          min-height: 100vh;
        }
        .rent-card {
          border-radius: 16px;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default RentPayment;
