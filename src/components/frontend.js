import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route,Routes, Link, Outlet } from 'react-router-dom';
import HallTicketLogin from './frontend/login';
import HallTicketForm from './frontend/applicationform';
import HallTicket from './frontend/hallticket';

const FrontendPage = () => {
    return (
      <div>
        <h2>Frontend Pages</h2>
        <ul>
          <li>
            <Link to="/frontend/login">Login</Link>
          </li>
          <li>
            <Link to="/frontend/applicationform">HallTicketForm</Link>
          </li>
          <li>
            <Link to="/frontend/hallticket">HallTicket</Link>
          </li>
          <li>
            <Link to="/frontend/blog">Blog</Link>
          </li>
          <li>
            <Link to="/frontend/download">HallTicket-download</Link>
          </li>
        </ul>

        <Outlet/> 
        
      </div>
    );
  };
  
    
  export default FrontendPage;