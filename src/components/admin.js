import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route , Link, Outlet } from 'react-router-dom';
import Login from './admin/adminlogin';
import Dashboard from './admin/dashboard';
import AdminDisplay from './admin/admindisplay';



const AdminPage = () => {
    return (
      <div>
        <h2>Admin Pages</h2>
        <ul>
          <li>
            <Link to="/admin/adminlogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/admin/dashboard">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/admindisplay">Admin Display</Link>
          </li>
          <li>
            <Link to="/admin/markdowninput">Marked Preview</Link>
          </li>
          <li>
            <Link to="/admin/adminform">Admin form</Link>
          </li>

        </ul>
        <Outlet/>

      
      </div>
    );
  };
export default AdminPage;