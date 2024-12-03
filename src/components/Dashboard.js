// src/components/Dashboard.js
import React from 'react';
import HealthChart from './HealthChart';  // Import the HealthChart component

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Health Insights</h2>
      <HealthChart />  {/* Display the HealthChart */}
    </div>
  );
};

export default Dashboard;
