import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1>Plurialsight Administration</h1>
        <p>React, Flux, and React Router for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary">
          About
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
