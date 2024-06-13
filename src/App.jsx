import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Signup } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
