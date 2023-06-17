import React from 'react';
import '../css/dashboard.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="#">View Submitted Applications</a>
        </li>
        <li>
          <a href="#">Authorize Submitted Applications</a>
        </li>
        <li>
          <a href="#">Generate Hall Tickets</a>
        </li>
        <li>
          <a href="#">Publish Hall Tickets</a>
        </li>
        <li>
          <a href="#">View Generated Hall Tickets</a>
        </li>
        <li>
          <a href="#">Edit Generated Hall Tickets</a>
        </li>
        <li>
          <a href="#">Delete Hall Tickets</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
