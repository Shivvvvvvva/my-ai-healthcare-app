// src/components/HealthChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';  // Importing chart.js library for line chart

const HealthChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],  // Example months
    datasets: [
      {
        label: 'Heart Rate (bpm)',  // Label for the chart
        data: [72, 75, 80, 78, 76, 74],  // Example heart rate data over months
        borderColor: 'rgba(75,192,192,1)',  // Line color
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Heart Rate Over Time</h3>
      <Line data={data} />  {/* Render the Line Chart */}
    </div>
  );
};

export default HealthChart;
