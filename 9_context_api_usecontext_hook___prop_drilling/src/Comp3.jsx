import React from "react";
import Comp4 from "./Comp4";
function Comp3({ sayHello }) {
  return (
    <div>
      <Comp4 sayHello={sayHello} />
      {/*this is just to show that how prop drilling wroks means pasiing props to its childern and grandChildern */}
      {/* this components does nothing just passes props to its child which is Comp4 */}
    </div>
  );
}

export default Comp3;
