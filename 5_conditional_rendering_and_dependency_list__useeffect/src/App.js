import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  let [Count, setCount] = useState(0);
  useEffect(() => {
    // 1st Method

    // if (Count >= 1) {
    //   console.log(`State of Count is changes ${Count} times.`);
    //   document.title = ` Count ${Count}`;
    // } else {
    //   document.title = ` Count `;
    // }

    // 2nd Method

    Count >= 1
      ? (document.title = ` Count ${Count}`)
      : (document.title = ` Count`);

    // 3rd Method
    // Count >= 1 && (document.title = ` Count ${Count}`);
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
        <p className="title">Check The Page Title</p>
        <div className="counterWrapper">
          <p className="count">{Count}</p>
          <button onClick={updateCount}>Click Me </button>
        </div>
      </div>
      <div class="details">
        <h2>Details:-</h2>
        <ol>
          <h3>What is Dependency List Array [] ?</h3>
          <li class="list1">
            Dependency List is an array value you pass as a second prameter to
            UseEffect useEffect( {"()=>{}"},[])
            <ul>
              <li>
                if you dont pass the array it will rerendur useEffect every time
                when a State value is changed in your component
              </li>
              <li>
                if you pass empty array [] useEffect will run only once when the
                page relodes
              </li>
              <li>
                if you want to render your useEffet only when the specific state
                changes its value then you can pass that state inside the
                useEffect array like [stateName]
              </li>
            </ul>
          </li>
          <li class="list2">
            <h3>What is Conditional rendering ?</h3>
            to render different user interface (UI) markup if a condition is
            true or false. if-else is used inside the useEffect dont wrap the
            useEffect indie if-else it will throw error
            <ul>
              <h4>Using If-else</h4>
              <li className="commonConditionalOperators">
                {
                  // eslint-disable-next-line no-template-curly-in-string
                  "if (Count >= 1) {document.title = ` Count ${Count}`} else {document.title = `Count`}"
                }
              </li>
              <h4>Using Ternary Operator</h4>
              <li className="commonConditionalOperators">
                Count{">="} 1 ? (document.title = ` Count ${"{"}Count{"}"}`) :
                (document.title = ` Count`);
              </li>
              <h4>Using Short Circuit</h4>
              <li className="commonConditionalOperators">
                Count {">="} 1 {"&&"} (document.title = ` Count ${"{"}Count{"}"}
                `);
              </li>
            </ul>
          </li>
          <li class="list3">you can create any number of useEffect you want</li>
        </ol>
      </div>
    </>
  );
}

export default App;
