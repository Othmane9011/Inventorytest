import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { FrontendApi, Configuration } from "@ory/client";
import Home from "./Home";
import Login from "./Login";

const basePath = process.env.REACT_APP_ORY_URL || "http://localhost:4000";
const ory = new FrontendApi(
  new Configuration({
    basePath,
    baseOptions: {
      withCredentials: true,
    },
  })
);

function App() {
  const [session, setSession] = useState(null);
  const [logoutUrl, setLogoutUrl] = useState();

  const getUserName = (identity) =>
    identity?.traits.email || identity?.traits.username;

  useEffect(() => {
    ory
      .toSession()
      .then(({ data }) => {
        setSession(data);
        ory.createBrowserLogoutFlow().then(({ data }) => {
          setLogoutUrl(data.logout_url);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/app"
            element={
              session ? (
                <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Welcome to Ory, {getUserName(session?.identity)}.
                    </p>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a>
                    <a href={logoutUrl}>Logout</a>
                  </header>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );

  
}



export default App;
