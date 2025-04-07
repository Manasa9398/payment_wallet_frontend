import React from "react";
import { Container, Card } from "react-bootstrap";

const Profile = () => {
  // Dummy data — you can replace this with real user data from API or context
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    upiId: "rahul123@fastpay"
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm" style={{ borderRadius: "20px" }}>
      <img
    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0D8ABC&color=fff`}
    alt="Avatar"
    className="rounded-circle"
    width="80"
    height="80"
  />
        <h4 className="text-primary fw-bold mb-3">My Profile</h4>
        <div className="text-center mb-3">
  
</div>

        <div className="mb-2">
          <strong>Name:</strong> <span className="text-muted">{user.name}</span>
        </div>
        <div className="mb-2">
          <strong>Email:</strong> <span className="text-muted">{user.email}</span>
        </div>
        <div>
          <strong>UPI ID:</strong> <span className="text-muted">{user.upiId}</span>
        </div>
      </Card>
    </Container>
  );
};

export default Profile;
