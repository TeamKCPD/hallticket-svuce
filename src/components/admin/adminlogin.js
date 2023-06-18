import React from 'react';
import "./css/login.css";

const Login = () => {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <br /><br />
  
        <br /><br />
  
        <form action="" method="POST" className="text-center">
          Username: <br />
          <input type="text" name="username" placeholder="Enter Username" /><br /><br />
  
          Password: <br />
          <input type="password" name="password" placeholder="Enter Password" /><br /><br />
  
          <input type="submit" name="submit" value="Login" className="btn-primary" />
          <br /><br />
        </form>
  
        <div className="login-footer">
          <p>Sri_Venkateswara_University</p>
        </div>
      </div>
    );
  }
  export default Login;
  