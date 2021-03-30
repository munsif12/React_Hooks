import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/About"
          component={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/munsif"
          component={() => {
            return <Home />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
