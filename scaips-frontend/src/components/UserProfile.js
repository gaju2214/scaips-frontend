import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { email } = useParams();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>👤 User Profile</h1>
      <p>Welcome, <strong>{email}</strong></p>
    </div>
  );
};

export default UserProfile;
