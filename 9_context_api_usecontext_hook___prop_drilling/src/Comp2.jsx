import React from "react";
import Comp3 from "./Comp3";
function Comp2({ sayHello }) {
  return (
    <div>
      <Comp3 sayHello={sayHello} />
      {/*this is just to show that how prop drilling wroks means pasiing props to its childern and grandChildern */}
      {/* this components does nothing just passes props to its child which is Comp3 */}
    </div>
  );
}

export default Comp2;
