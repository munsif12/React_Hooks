import React, { useState } from 'react'

import "./App.css";

function App() {
  const [Value, setValue] = useState("");
  const [ArrayOfList, setArrayOfList] = useState([]);
  function handleChange(e) {
    const value = e.target.value;
    setValue(value);
  }
  function handleSubmit(e) {
    //adding elements to array
    //...preval is having the elemts of array and ... will spread them
    setArrayOfList(preVal => [...preVal, Value]);
    document.getElementById("input").value = "";
  }
  function deleteElement(index) {
    /*
    first written this method that didnt work
    setArrayOfList(
      (preVal) => {
        return ArrayOfList.filter(val => {
          return [
            ArrayOfList.indexOf(val) != index
          ]
        })
      }
    ) */
    //removing elements  from arry uing filter method in javascripts
    setArrayOfList(
      ArrayOfList.filter(val => ArrayOfList.indexOf(val) !== index)
    )

    /*
    
    var res = ArrayOfList.filter(val =>ArrayOfList.indexOf(val) !== index );
    console.log(index)
    console.log(res); */
  }
  return (
    <div className="App">
      <p class="title">Spread Operator in UseState</p>
      <div class="elements">
        <ul class="list__items">
          {ArrayOfList.map((val, index) => {
            return <li onClick={() => { deleteElement(index) }} key={index}> <span>{index + " : "}</span> {val}</li>
          })}
        </ul>
      </div>
      <div class="inputAndSubmit">
        <input type="text" name="" id="input" onChange={handleChange} />
        <button onClick={handleSubmit}>Enter</button>
      </div>
    </div>
  );
}

export default App;
