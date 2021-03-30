import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div class="navWrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#s">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
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
            <li class="nav-item">
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
            <li class="nav-item">
              <a class="nav-link disabled" href="#s">
                Disabled
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
