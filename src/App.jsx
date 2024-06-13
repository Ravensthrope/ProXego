import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Signup } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
