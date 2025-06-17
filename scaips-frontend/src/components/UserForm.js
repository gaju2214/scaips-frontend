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

      if (res.ok) {
        alert('User created successfully! 🎉');
        navigate(`/profile/${email}`); // ✅ redirect to profile
      } else {
        alert('Error: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Network or server error');
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
      <button type="submit">Create</button>
    </form>
  );
};

export default UserForm;
