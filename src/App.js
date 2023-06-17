import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/dashboard";
import Login from "./admin/adminlogin";
import HallTicketForm from './frontend/applicationform';
import HallTicketLogin from './frontend/login';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={< Dashboard/>}>

        
        </Route>
      </Routes>

    
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
