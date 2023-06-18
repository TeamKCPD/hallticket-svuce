import React from 'react';
import '../css/dashboard.css';

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-box">
        <a href="#">View Submitted Applications</a>
      </div>
      <div className="dashboard-box">
        <a href="#">Authorize Submitted Applications</a>
      </div>
      <div className="dashboard-box">
        <a href="#">Generate Hall Tickets</a>
      </div>
      <div className="dashboard-box">
        <a href="#">Publish Hall Tickets</a>
      </div>
    </div>
  );
};

export default DashboardContent;
