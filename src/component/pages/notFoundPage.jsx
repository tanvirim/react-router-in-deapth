import React from "react";
import { Link } from "react-router-dom";
import './cssForPages.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>Oops! Page not found.</h1>
      <p>The page you are looking for doesn't exist. Please check the URL or navigate to a different page.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
