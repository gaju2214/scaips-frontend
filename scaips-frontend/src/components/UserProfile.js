import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { email } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, <strong>{email}</strong></p>
    </div>
  );
};

export default UserProfile;
