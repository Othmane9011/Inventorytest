import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FrontendApi, Configuration } from "@ory/client";

const basePath = process.env.REACT_APP_ORY_URL || "http://localhost:4000";
const ory = new FrontendApi(
  new Configuration({
    basePath,
    baseOptions: {
      withCredentials: true,
    },
  })
);

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    ory.createBrowserLoginFlow().then(({ data }) => {
      window.location.href = data.request_url;
    }).catch(err => {
      console.error(err);
      navigate('/');
    });
  }, [navigate]);

  return <h1>Redirecting to login...</h1>;
}

export default Login;
