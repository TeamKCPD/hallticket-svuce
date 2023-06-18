import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();

  // Function to handle navigation when the user is logged in
  const handleLoggedInNavigation = () => {
    navigate("/newpage"); // Replace "/dashboard" with the desired URL for the new page
  };

  return (
    <div>
      <div>
        {props.name ? (
          // If the user is logged in, display a greeting and the sign-out button
          <div>
            <h2>Welcome - {props.name}</h2>
            
          </div>
        ) : (
          // If the user is not logged in, display login and signup links
          <div>
            <h1>
              <Link to="/login">Login</Link>
            </h1>
            <br />
            <h1>
              <Link to="/signup">Signup</Link>
            </h1>
          </div>
        )}
      </div>

      <br />
      <br />
      <br />

      {props.name ? (
        // If the user is logged in, display a message and a button to navigate to a new page
        <div>
          <h2>You are already logged in!</h2>
          <button onClick={handleLoggedInNavigation}>Go to Dashboard</button>
        </div>
      ) : (
        // If the user is not logged in, display a message to prompt login
        <h2>Login please</h2>
      )}
    </div>
  );
}

export default Home;

