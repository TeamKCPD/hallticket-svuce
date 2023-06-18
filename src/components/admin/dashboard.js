import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import DashboardContent from './components/Dashboardcontent';


const Dashboard = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
