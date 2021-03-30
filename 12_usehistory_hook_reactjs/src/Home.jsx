import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function Home() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="homePage">
      <h1>UseLocation Hooks in Reactjs</h1>
      {/* Showing the page name to user */}
      <p>
        This is
        {location.pathname === "/"
          ? " Home "
          : location.pathname.replace("/", " ")}{" "}
        Page
      </p>
      {/* to tell user to Login using Short Circuit Method */}
      {location.pathname === "/munsif" && <div>You are Loged In Thanks!</div>}
      {/* Go Back Button if not at about page if at about page then goto Home page*/}
      {location.pathname === "/" ? null : (
        <div>
          <button
            onClick={
              location.pathname === "/About"
                ? () => {
                    history.push("/");
                  }
                : () => {
                    history.goBack();
                  }
            }
          >
            {location.pathname === "/About" ? "Home" : "Go Back"}
          </button>
          {/* Setting up Login Logout Button { login to munsif page logout to about page }*/}
          <button
            onClick={
              location.pathname === "/About"
                ? () => {
                    history.push("/munsif");
                  }
                : () => {
                    history.push("/About");
                  }
            }
          >
            {/* to change the login logout text of Button */}
            {location.pathname === "/About" ? "Login" : "Logout"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
