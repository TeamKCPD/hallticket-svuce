import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import FrontendPage from './components/frontend';
import AdminPage from './components/admin';
import HallTicketLogin from './components/frontend/login';
import HallTicketForm from './components/frontend/applicationform';
import HallTicket from './components/frontend/hallticket';
import Login from './components/admin/adminlogin';
import Dashboard from './components/admin/dashboard';
import AdminDisplay from './components/admin/admindisplay';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/frontend">Frontend</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
 
      <Routes>
        <Route path="/frontend" element={<FrontendPage />}>
                <Route exact path="/frontend/login" component={HallTicketLogin} />
                <Route exact path="/frontend/applicationform" component={HallTicketForm} />
                <Route exact path="/frontend/hallticket" component={HallTicket} />
        </Route>
            
        <Route path="/admin" element={<AdminPage />} >
                <Route exact path="/adminlogin" component={Login} />
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route exact path="/admin/admindisplay" component={AdminDisplay} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;


