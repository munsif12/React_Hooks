import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="homePage">
      <h1>UseLocation Hooks in Reactjs</h1>i am
      {location.pathname === "/"
        ? " Home "
        : location.pathname.replace("/", " ")}{" "}
      Page
    </div>
  );
}

export default Home;
