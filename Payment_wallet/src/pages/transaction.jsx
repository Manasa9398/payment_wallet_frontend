import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { Container, Card, Button, Form, Table } from "react-bootstrap";

export default function Transaction() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [receiverUpi, setReceiverUpi] = useState('');
  const [amount, setAmount] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const mockPassword = "1234";

  useEffect(() => {
    const fetchUserAndTransactions = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
        fetchTransactions(storedUser.upi_id);
        fetchBalance(storedUser.upi_id);
      }
    };
    fetchUserAndTransactions();
  }, []);

  const fetchTransactions = async (upi_id) => {
    try {
      const res = await axios.get(`/api/transactions/${upi_id}`);
      setTransactions(res.data);
    } catch (err) {
      console.error('Error fetching transactions:', err);
    }
  };

  const fetchBalance = async (upi_id) => {
    try {
      const res = await axios.get(`/api/user/${upi_id}`);
      setUser(res.data);
    } catch (err) {
      console.error('Error fetching balance:', err);
    }
  };

  const handleTransaction = async () => {
    if (!receiverUpi || !amount || !password) {
      setMessage('All fields are required.');
      return;
    }

    if (password !== mockPassword) {
      setMessage('Incorrect UPI PIN. Please try again.');
      return;
    }

    try {
      const response = await axios.post('/api/transaction', {
        sender_upi_id: user.upi_id,
        receiver_upi_id: receiverUpi,
        amount: parseFloat(amount)
      });

      setMessage(response.data.message);
      if (response.status === 200) {
        fetchTransactions(user.upi_id);
        fetchBalance(user.upi_id);
        setReceiverUpi('');
        setAmount('');
        setPassword('');
      }
    } catch (err) {
      console.error('Transaction failed:', err);
      setMessage('Transaction failed. Try again.');
    }
  };

  const chartData = transactions.map(tx => ({
    timestamp: new Date(tx.timestamp).toLocaleDateString(),
    amount: tx.amount,
  }));

  return (
    <Container className="py-4">
      {user && (
        <Card className="mb-4 shadow rounded-4 border-0" style={{ backgroundColor: "#e6f0ff" }}>
          <Card.Body>
            <Card.Title className="fw-bold text-primary fs-4">👋 Welcome, {user.name}</Card.Title>
            <p className="mb-1"><strong>Email:</strong> {user.email}</p>
            <p className="mb-1"><strong>UPI ID:</strong> {user.upi_id}</p>
            <h5 className="text-success fw-bold mt-2">Balance: ₹{user.balance}</h5>
          </Card.Body>
        </Card>
      )}

      <Card className="mb-4 shadow rounded-4 border-0">
        <Card.Body>
          <Card.Title className="text-primary fw-bold fs-5 mb-3">💸 Send Money</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Receiver UPI ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., someone@bank"
                value={receiverUpi}
                onChange={(e) => setReceiverUpi(e.target.value)}
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
            <Form.Group className="mb-3">
              <Form.Label>Enter UPI PIN</Form.Label>
              <Form.Control
                type="password"
                placeholder="4-digit PIN"
                value={password}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d{0,6}$/.test(val)) setPassword(val);
                }}
                maxLength={6}
              />
            </Form.Group>
            <Button variant="primary" className="rounded-pill px-4" onClick={handleTransaction}>Send</Button>
            {message && <p className="mt-3 text-info fw-medium">{message}</p>}
          </Form>
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow rounded-4 border-0">
        <Card.Body>
          <Card.Title className="text-primary fw-bold fs-5 mb-3">📜 Transaction History</Card.Title>
          <Table responsive hover className="border rounded-3 overflow-hidden">
            <thead className="table-primary">
              <tr>
                <th>Status</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Amount</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx._id}>
                  <td>{tx.sender_upi_id === user.upi_id ? '🔺 Sent' : '⬇️ Received'}</td>
                  <td>{tx.sender_upi_id}</td>
                  <td>{tx.receiver_upi_id}</td>
                  <td>₹{tx.amount}</td>
                  <td>{new Date(tx.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="shadow rounded-4 border-0">
        <Card.Body>
          <Card.Title className="text-primary fw-bold fs-5 mb-3">📈 Spending Trend</Card.Title>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#007bff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
    </Container>
  );
}
