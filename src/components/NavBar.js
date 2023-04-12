import React from "react";
// import { Link } from "react-router-dom";
import{Link} from 'react-scroll'
import "../App.css";
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary sticky-top py-4">
        <div className="container">
          <Link to="/" className="navbar-brand text-white">
            START BOOTSTRAP
          </Link>
          <button
            className="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="portfolio"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-link text-white"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-link text-white"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
