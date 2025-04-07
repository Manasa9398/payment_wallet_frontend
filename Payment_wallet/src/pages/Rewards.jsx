import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const Rewards = () => {
  return (
    <Container className="mt-4">
      <h3>Rewards</h3>
      <Alert variant="success">
        🎉 You have earned ₹50 cashback on your last recharge!
      </Alert>
    </Container>
  );
};

export default Rewards;
