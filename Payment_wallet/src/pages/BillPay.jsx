import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const BillPay = () => {
  const [billNumber, setBillNumber] = useState('');

  const handleBillPay = () => {
    if (billNumber) {
      alert(`Paid bill: ${billNumber}`);
    } else {
      alert('Enter bill number!');
    }
  };

  return (
    <Container className="mt-4">
      <h3>Pay Your Bills</h3>
      <Form.Control
        type="text"
        placeholder="Enter Bill Number"
        value={billNumber}
        onChange={(e) => setBillNumber(e.target.value)}
        className="mb-3"
      />
      <Button onClick={handleBillPay}>Pay Bill</Button>
    </Container>
  );
};

export default BillPay;
