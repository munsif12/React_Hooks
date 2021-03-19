import React from "react";

import "./App.css";

function App() {
  var [ClickCounter, setClickCounter] = React.useState(0);
  const [
    LuckTest,
    setLuckTest,
  ] = React.useState(); /* OR import Like {useState} */
  function luckTester() {
    const generateLuckNumber = Math.random() * 1;
    if (generateLuckNumber >= 0.5) {
      setLuckTest("Yayyy You Are Lucky");
      document.getElementById("luckyParagraph").style.color = "green";
    } else {
      setLuckTest("Owww Bad Luck Try Again!");
      document.getElementById("luckyParagraph").style.color = "red";
    }
    //with using ternary operator
    // generateLuckNumber >= 0.5 ? setLuckTest("Yayyy You Are Lucky") : setLuckTest("Owww Bad Luck Try Again!")
    setClickCounter(++ClickCounter);
  }
  return (
    <div className="App">
      <p className="title__p">Test Your Luck</p>
      <button onClick={luckTester}>Test</button>
      <p
        id="luckyParagraph"
        className="luck__p" /*style={{ color: generateLuckNumber > 0.5 ? "green" : "red" }} */
      >
        {LuckTest}
        <span> {ClickCounter} </span>{" "}
      </p>
    </div>
  );
}
// onclick pa 1 function banow joka random true or false generate kry or uska leya 1 
//state banow or phr uske true of false ka base pa luck dekaho ussa ya hoga ka
// document.getEle-- ke zarurat nhi pary ge ma direct he ternary operator ka zareya style krsakta hu jasy many neachy keya hua h
export default App;
