import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to Our Application</h1>
        <p>
          <Link to="/login">Go to Login</Link>
        </p>
      </header>
    </div>
  );
}

export default Home;
