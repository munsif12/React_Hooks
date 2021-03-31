import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navWrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#s">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                exact
                to="/"
                activeClassName="activeClass"
                className="aTag"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                exact
                to="/About"
                activeClassName="activeClass"
                className="aTag"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#s">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
