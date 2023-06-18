import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality
    console.log('Logout clicked');
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Sri Venkateswara University College of Engineering Examination Dashboard</h1>
      </div>
      <div className="profile-dropdown">
        <div className="profile" onClick={handleProfileClick}>
          <FaUserCircle className="profile-icon" />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <p>View Profile</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
