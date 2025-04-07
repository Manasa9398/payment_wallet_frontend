import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const ReferEarn = () => {
  return (
    <Container className="mt-4">
      <Card className="p-4 text-center shadow-sm">
        <h4 className="text-primary fw-bold mb-3">Refer & Earn</h4>
        <p>Invite your friends to join Fast-Pay and earn ₹50 for every successful referral!</p>
        <Button variant="primary" className="rounded-pill px-4">Invite Now</Button>
      </Card>
    </Container>
  );
};

export default ReferEarn;
