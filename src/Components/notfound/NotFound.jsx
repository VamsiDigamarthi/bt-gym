import React from "react";
import "./notfound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found-main">
      <h1>404 - Error</h1>
      <h3>Page Not Found</h3>
      <Link className="not-found-link" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
