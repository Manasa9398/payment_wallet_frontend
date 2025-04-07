import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const walletItems = []

const Wallet = () => {
  return (
    <Container className="py-4">
      <h3 className="text-center mb-4 text-primary">My Money</h3>
      <Row>
        {walletItems.map((item, idx) => (
          <Col xs={6} md={4} lg={3} className="mb-4" key={idx}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                <Card.Text className="mt-2 fw-semibold">{item.label}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wallet;
