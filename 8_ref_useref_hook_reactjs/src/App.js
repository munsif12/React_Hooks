import "./App.css";
import React, { useRef } from "react";

function App() {
  const [Name, setName] = React.useState("");
  const userNameRef = useRef("");
  function getValue(e) {
    e.preventDefault();
    setName(userNameRef.current.value);
    console.log(userNameRef.current.value);
  }
  return (
    <div className="App">
      <p className="title">
        Ref and useRef | Controlled and Uncontrolled Form Components
      </p>
      <div className="formWrapper">
        <form onSubmit={getValue}>
          <input
            type="text"
            name="name"
            id="input"
            placeholder="Name..."
            ref={userNameRef}
          />
          <input type="submit" value="Submit" id="button" />
        </form>
        <p>
          {Name === "" ? (
            <div>Enter your Name Please!</div>
          ) : (
            <div>Your Name is : {Name}</div>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
