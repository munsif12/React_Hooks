import React, { useContext } from "react";
import { UserName } from "./App"; //importing the context from App
import propsImg from "./propsContextImage.png";
import contextImg from "./contextImage.png";
function Comp4({ sayHello }) {
  //useContext(createdContext :(useName))
  const userName = useContext(UserName); //now using useContext which is a hook and use to
  // replace the ( <usrname.Consumer></usrname.Consumer> ) hell and its a hooks so its alwayes called inside functionall component
  return (
    <div className="main">
      <h1>Context Api And useContext in Reactjs</h1>
      <div className="propsDiv">
        <img src={propsImg} alt="" srcset="" />
        <p>
          This data ( <span>{sayHello}</span> ) is comming from
          <span> Props</span>
        </p>
      </div>
      <div className="contextDiv">
        <img src={contextImg} alt="" srcset="" />
        <p>
          This data {"=> "}( <span>{userName}</span> ) is came From
          <span> Context Api</span>
        </p>
      </div>
    </div>
  );
}

export default Comp4;
