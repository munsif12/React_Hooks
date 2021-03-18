import React from 'react'

import './App.css';

function App() {
  var [ClickCounter, setClickCounter] = React.useState(0)
  const [LuckTest, setLuckTest] = React.useState(); /* OR import Like {useState} */
  function luckTester() {
    const generateLuckNumber = Math.random() * 1;
    if (generateLuckNumber >= 0.5) {
      setLuckTest("Yayyy You Are Lucky");
      document.getElementById("luckyParagraph").style.color = "green"
    }
    else {
      setLuckTest("Owww Bad Luck Try Again!")
      document.getElementById("luckyParagraph").style.color = "red"
    }
    //with using ternary operator
    // generateLuckNumber >= 0.5 ? setLuckTest("Yayyy You Are Lucky") : setLuckTest("Owww Bad Luck Try Again!")
    setClickCounter(++ClickCounter);
  }
  return (
    <div className="App">
      <p className="title__p">Test Your Luck</p>
      <button onClick={luckTester}>Test</button>
      <p id="luckyParagraph" className="luck__p">{LuckTest}
        <span> {ClickCounter}  </span> </p>
    </div>
  );
}

export default App;
