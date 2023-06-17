import React, { useEffect, useState } from 'react';
import "./css/admindisplay.css"
import axios from 'axios';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch the submitted applications from the server
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/applications');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleApprove = (applicationId) => {
    // Handle the approval logic for the application with the given ID
    // You can make an API call to update the application's status to approved
    // and perform any other necessary actions

    // For demonstration purposes, let's log the application ID to the console
    console.log('Application approved:', applicationId);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.name}</td>
              <td>{application.rollNo}</td>
              <td>{application.branch}</td>
              <td>
                <button onClick={() => handleApprove(application.id)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
