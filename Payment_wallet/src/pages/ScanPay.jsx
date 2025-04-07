import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ScanPay = () => {
  // Sample UPI payment link (replace with actual values as needed)
  const upiLink = "upi://pay?pa=receiver@upi&pn=Receiver%20Name&am=1&cu=INR";

  return (
    <Container className="mt-4 text-center">
      <h3 className="mb-4">Scan & Pay</h3>
      <Card className="p-4 shadow-lg rounded">
        {/* Clickable QR Code */}
        <a href={upiLink}>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiLink)}&size=200x200`}
            alt="UPI QR Code"
            style={{ width: '200px', cursor: 'pointer' }}
          />
        </a>
        <p className="mt-3">Tap the QR or scan it with a UPI app to pay</p>
      </Card>
    </Container>
  );
};

export default ScanPay;
