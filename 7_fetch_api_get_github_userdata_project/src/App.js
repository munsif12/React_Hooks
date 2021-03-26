import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [ApiData, setApiData] = useState([]);
  async function callApiData() {
    const fetchedData = await fetch("https://api.github.com/users");
    const data = await fetchedData.json();
    setApiData(data);
  }
  useEffect(() => {
    callApiData();
  }, []);
  return (
    <div className="App">
      <h1 className="title">Github Popular Users</h1>
      <div class="row">
        {ApiData.map((val) => {
          console.log(val);
          return (
            <>
              <div class="col-xs-4">
                <div class="card">
                  <img class="card-img-top" src={val.avatar_url} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">{val.login}</h5>
                    <p class="card-text">ID : {val.id}</p>
                    <div class="row">
                      <a href={val.repos_url} class="btn btn-primary">
                        Repositorys
                      </a>
                      <a href={val.html_url} class="btn btn-primary">
                        Link To Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
