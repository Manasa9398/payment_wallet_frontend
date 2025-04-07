import React, { useEffect, useState } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);
  const [userUpi, setUserUpi] = useState('');

  useEffect(() => {
    const storedHistory = localStorage.getItem('transactionHistory');
    const user = JSON.parse(localStorage.getItem('user'));

    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }

    if (user && user.upi_id) {
      setUserUpi(user.upi_id);
    }
  }, []);

  return (
    <div className="m-4">
      <h2 className="mb-4">Transaction History</h2>
      {history.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>Type</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {history.map((tx) => (
              <tr key={tx._id}>
                <td>
                  {tx.sender_upi_id === userUpi ? (
                    <span className="text-danger">🔺 Sent</span>
                  ) : (
                    <span className="text-success">⬇️ Received</span>
                  )}
                </td>
                <td>{tx.sender_upi_id}</td>
                <td>{tx.receiver_upi_id}</td>
                <td>₹{tx.amount}</td>
                <td>{new Date(tx.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
