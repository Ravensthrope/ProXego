import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state;
  return (
    <>
      <h1>This is dashboard {username}</h1>
    </>
  );
};

export default Dashboard;
