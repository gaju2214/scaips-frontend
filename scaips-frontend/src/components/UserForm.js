import React, { useState } from 'react';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [role, setRole] = useState('student');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password_hash: passwordHash,
        role
      })
    });

    const data = await res.json();
    console.log(data);
    alert('User created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Password Hash"
        value={passwordHash}
        onChange={(e) => setPasswordHash(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="alumni">Alumni</option>
        <option value="industry">Industry</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

export default UserForm;
