import React from "react";
import Comp2 from "./Comp2";
function comp1({ sayHello }) {
  return (
    <div>
      <Comp2 sayHello={sayHello} />
      {/*this is just to show that how prop drilling wroks means pasiing props to its childern and grandChildern */}
      {/* this components does nothing just passes props to its child which is Comp2 */}
    </div>
  );
}

export default comp1;
