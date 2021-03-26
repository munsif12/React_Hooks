import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingComponent from "./Loading";
import UserDataComponent from "./UserData";
function App() {
  const [ApiData, setApiData] = useState([]);
  const [Loading, setLoading] = useState(true);
  async function callApiData() {
    try {
      const fetchedData = await fetch("https://api.github.com/users");
      const data = await fetchedData.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(`Error While Fetching ${error}`);
    }
  }

  useEffect(() => {
    callApiData();
  }, []);

  //loading functionality
  if (Loading) {
    return <LoadingComponent />;
  } else {
    return <UserDataComponent ApiData={ApiData} />;
  }
}
export default App;
