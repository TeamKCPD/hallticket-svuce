import React, { useState } from 'react';
import "./css/login.css";

const HallTicketLogin = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [dob, setDob] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation and login verification logic here
    if (rollNumber === '123456' && dob === '01/01/2000') {
      // Redirect to hall ticket download page or display hall ticket
      console.log('Login successful');
    } else {
      setErrorMessage('Invalid roll number or date of birth');
    }
  };

  return (
    <div className="login-container">
      <h2>Hall Ticket Download Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number:</label>
          <input
            type="text"
            id="rollNumber"
            value={rollNumber}
            onChange={handleRollNumberChange}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth (DOB):</label>
          <input
            type="text"
            id="dob"
            value={dob}
            onChange={handleDobChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default HallTicketLogin;
