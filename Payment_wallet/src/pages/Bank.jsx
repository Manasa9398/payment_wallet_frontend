// Bank.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsBank, BsCashStack, BsWallet2, BsCreditCard } from 'react-icons/bs';

const bankServices = [
  { icon: <BsBank size={26} />, label: 'Bank Accounts' },
  { icon: <BsCashStack size={26} />, label: 'Balance Check' },
  { icon: <BsWallet2 size={26} />, label: 'Linked Wallets' },
  { icon: <BsCreditCard size={26} />, label: 'Credit Cards' },
];

const Bank = () => {
  return (
    <div className="bank-page py-4">
      <Container>
        <h4 className="fw-bold mb-4 text-primary">Bank Services</h4>
        <Row className="g-3 text-center">
          {bankServices.map((item, idx) => (
            <Col xs={6} md={3} key={idx}>
              <Card className="bank-card shadow-sm h-100">
                <Card.Body className="py-4">
                  {item.icon}
                  <p className="mt-3 mb-0">{item.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .bank-page {
          background-color: #f5f8ff;
          min-height: 100vh;
        }
        .bank-card {
          border-radius: 16px;
          background-color: #fff;
          transition: transform 0.2s ease;
          cursor: pointer;
        }
        .bank-card:hover {
          transform: scale(1.03);
          border: 1px solid #007bff20;
        }
      `}</style>
    </div>
  );
};

export default Bank;
