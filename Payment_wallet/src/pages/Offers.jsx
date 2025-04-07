import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Offers = () => {
  const offers = [
    {
      title: 'Recharge Offer',
      desc: 'Get ₹20 cashback on ₹199+',
      img: 'https://www.shutterstock.com/image-vector/red-banner-special-offer-260nw-1035467014.jpg', // Replace with real image
    },
    {
      title: 'Bill Pay Deal',
      desc: 'Pay electricity bill and get 5% off',
      img: 'https://images.freekaamaal.com/post_images/1581575180.png', // Replace with real image
    },
  ];

  return (
    <Container className="mt-4">
      <h4 className="mb-4">🔥 Special Offers for You</h4>
      <Row>
        {offers.map((offer, i) => (
          <Col md={6} className="mb-3" key={i}>
            <Card style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <Card.Img variant="top" src={offer.img} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
