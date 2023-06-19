import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import FrontendPage from './components/frontend';
import AdminPage from './components/admin';
import HallTicketLogin from './components/frontend/login';
import HallTicketForm from './components/frontend/applicationform';
import HallTicket from './components/frontend/hallticket';
import Login from './components/admin/adminlogin';
import Dashboard from './components/admin/dashboard';
import AdminDisplay from './components/admin/admindisplay';
import Marked from './components/admin/markdowninput';
import Blogs from './components/frontend/blog';


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
          <Route path="login" element={<HallTicketLogin />} />
          <Route path="applicationform" element={<HallTicketForm />} />
          <Route path="hallticket" element={<HallTicket />} />
          <Route path="blog" element={<Blogs />} />
        </Route>

        <Route path="/admin" element={<AdminPage />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admindisplay" element={<AdminDisplay />} />
          <Route path="markdowninput" element={<Marked />} />

        </Route>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App