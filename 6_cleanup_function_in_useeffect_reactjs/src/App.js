import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [WindowSize, setWindowSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });
  function getSizeOfWindow() {
    setWindowSize(() => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  }
  useEffect(() => {
    window.addEventListener("resize", getSizeOfWindow);
    // jasy he ya line chaally ga use return wala part chal kr event ko remove
    // krda ga agr remove na keya to eventlstner laga rahy ga or computer hang
    // hoga return ko comment krka check krlo
    return () => {
      window.removeEventListener("resize", getSizeOfWindow);
    };
  }, [WindowSize]);
  return (
    <>
      <div className="App">
        <p className="title">Get Your Window Size</p>
        <div className="counterWrapper">
          <p className="count">Width:- {WindowSize.width}</p>
          <p className="count">Height :- {WindowSize.height}</p>
        </div>
      </div>
      <div class="details">
        <ul>
          <h3>Clean Up in USeEffect :-</h3>
          <li>
            Clean ka matlab ka use effect ma koi addd listner laga hua ha to uko
            remove krna taka website pa load na pary or website smooth run ko q
            ka event listners kafee heavy hoty h{" "}
          </li>
          <h3>EXAMPLE :-</h3>
          <li>
            {"useEffect( () => "} <br />
            {'window.addEventListener("resize", getSizeOfWindow);'}
            {
              " // jasy he ya line chaally ga use return wala part chal kr event ko remove  krda  ga agr remove na keya to eventlstner laga rahy ga or computer hang hoga return ko comment krka check krlo"
            }{" "}
            <br />
            {"return () => {"} <br />
            {' window.removeEventListener("resize", getSizeOfWindow); '} <br />
            {"};"}
            <br />
            {"  }, [WindowSize]);"}
            <br />
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
