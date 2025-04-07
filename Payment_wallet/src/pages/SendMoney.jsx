import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const SendMoney = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const storedPassword = "1234";

  const validatePhoneNumber = (number) => {
    const regex = /^[1-9][0-9]{9}$/; 
    return regex.test(number);
  };

  const validatePassword = (pwd) => {
    return pwd.length >= 4 && pwd.length <= 6 && pwd === storedPassword;
  };

  const handleSend = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit mobile number (should not start with 0)');
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid amount greater than 0');
      return;
    }

    if (!validatePassword(password)) {
      setError('Incorrect password. Please enter your valid 4-6 digit UPI PIN');
      return;
    }

    setError('');
    alert(`✅ ₹${amount} successfully sent to +91-${phoneNumber}`);
  };

  return (
    <Container className="mt-4">
      <h3 className="text-center mb-4">Send Money</h3>
      <Card className="p-4 shadow">
        <Form>
          <Form.Group controlId="formPhone">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter 10-digit mobile number"
              value={phoneNumber}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,10}$/.test(val)) setPhoneNumber(val);
              }}
              maxLength={10}
            />
          </Form.Group>

          <Form.Group controlId="formAmount" className="mt-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Enter UPI PIN</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter 4-6 digit PIN"
              value={password}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,6}$/.test(val)) setPassword(val);
              }}
              maxLength={6}
            />
          </Form.Group>

          {error && <p className="text-danger mt-3">{error}</p>}

          <Button variant="primary" className="mt-4 w-100" onClick={handleSend}>
            Send Money
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SendMoney;
