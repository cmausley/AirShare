import React from "react";
import "./HomeNav.css";

function HomeNav() {

    return (
        <div>
          <div></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">AirShare</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="#">Log In</a>
      <a className="nav-item nav-link" href="#">Meet the Team</a>
    </div>
  </div>
  </nav>
  </div>
    )
};

export default HomeNav;