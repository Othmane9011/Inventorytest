import React from "react";
import { Link } from "react-router-dom";
import FileUpload from './FileUpload'; // Import the FileUpload component

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to Our Application</h1>
        <p>
          <Link to="/login">Go to Login</Link>
        </p>
      </header>
      <FileUpload /> {/* Add the FileUpload component here */}
    </div>
  );
}

export default Home;
