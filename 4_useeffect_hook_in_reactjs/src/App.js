import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  let [Count, setCount] = useState(0);
  useEffect(() => {
    console.log(`State of Count is changes ${Count} times.`);
    document.title = ` Count ${Count}`;
  }, [Count]);
  /*agr ma brackts na dalta [count] to component ma koi b
  state update hota to sath useEffect be chal jata ab many 
  useEffect ko ya bata deya ha ka jab be Count name ka state 
  update ho tabhe useEffect ko cahlana */

  function updateCount() {
    setCount(++Count);
  }
  return (
    <>
      <div className="App">
        <p className="title">Check The Page Title /\</p>
        <div className="counterWrapper">
          <p className="count">{Count}</p>
          <button onClick={updateCount}>Click Me </button>
        </div>
      </div>
      <div class="details">
        <h2>Details:-</h2>
        <ol>
          <li class="list1">
            By using this Hook, you tell React that your component needs to do
            something after render. React will remember the function you passed
            (we'll refer to it as our “effect”), and call it later after
            performing the DOM updates.
          </li>
          <li class="list2">
            Effects Hooks are use to perform SIDE EFECTS in function component
            <h3>What are side Effects?</h3>
            Side effects are basically anything that effects something outside
            the scope of current function that is beign executed . This includes
            <ul>
              <li>API Request to our bacckend Services</li>
              <li>Data Fetching</li>
              <li>Manually changing DOM in Reactjs</li>
              <li>Call to our Authentication Services</li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}

export default App;
