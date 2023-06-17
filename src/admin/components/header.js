import React, { useState } from 'react';
import '../css/dashboard.css';


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
      <h2>Sri Venkateswara University College of Engineering Examination Dashboard</h2>
      <div className="profile-dropdown">
        <div className="profile" onClick={handleProfileClick}>
          Profile
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
