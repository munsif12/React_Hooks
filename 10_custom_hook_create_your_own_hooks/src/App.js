import React, { useState } from "react";
import CustomUseEffect from "./CustomUseEffect";
import "./App.css";
function App() {
  let [Count, setCount] = useState(0);
  //this is a custom hooks which is use tp set the useEffect
  CustomUseEffect(Count);

  function updateCount() {
    setCount(++Count);
  }
  return (
    <>
      <div className="App">
        <p className="title">Custom Hook -> Check The Page Title</p>
        <div className="counterWrapper">
          <p className="count">{Count}</p>
          <button onClick={updateCount}>Click Me </button>
        </div>
      </div>
      <div class="details">
        <h2>Details:-</h2>
        <ol>
          <li class="list1">
            jo component apka multiple jaga use horha ha uska1 alag component ||
            ya function banaow or usko useFunctionName ka name sa save kro or
            jaha uske use pary usse krty jow to woh apka cutomHook kahlai ga
          </li>
          <li class="list2">
            iscase ma agr multiple pages pa title wala counter chaheya hota to
            hambar bar code ko coy paste to na karty na just usko apna custom
            hook bana laty or jaha zarurat hote call krty
          </li>
        </ol>
      </div>
    </>
  );
}

export default App;
