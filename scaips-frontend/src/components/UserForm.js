import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [role, setRole] = useState('student');

  const navigate = useNavigate(); // ✅ initialize

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password_hash: passwordHash, role })
    });

    const data = await res.json();
    console.log('Response status:', res.status);
    console.log('Response data:', data);

    if (res.ok) {
      alert('User created!');
      navigate(`/profile/${email}`); // ✅ Redirect
    } else {
      alert('Error: ' + (data.message || 'Something went wrong'));
    }
  } catch (err) {
    console.error('Network error:', err);
    alert('Network error');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <div>
        <label>Email:</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div>
        <label>Password Hash:</label><br />
        <input type="text" value={passwordHash} onChange={(e) => setPasswordHash(e.target.value)} required />
      </div>

      <div>
        <label>Role:</label><br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
          <option value="industry">Industry</option>
        </select>
      </div>

      <br />
<button type="button" onClick={() => navigate('/profile/test@example.com')}>
  Test Redirect
</button>
    </form>
  );
};

export default UserForm;
