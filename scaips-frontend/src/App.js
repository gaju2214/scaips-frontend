import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserProfile from '././components/UserProfile'; // We'll create this next

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/profile/:email" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
