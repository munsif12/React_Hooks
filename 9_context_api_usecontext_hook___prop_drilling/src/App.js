import React, { createContext } from "react";

import "./App.css";
import Comp1 from "./Comp1";
const UserName = createContext(); //creating a context name as userName this is not a hook and it cant be created inside function
function App() {
  const sayHello = "Hello Contect Api";
  return (
    <div className="App">
      <UserName.Provider value="MUNSIF ALI MISRI">
        <Comp1 sayHello={sayHello} />
      </UserName.Provider>
    </div>
  );
}

export default App;
export { UserName }; //exporting the context
