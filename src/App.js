import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
        <p className="footer">| Developed by Shubham Jaiswal |</p>
      </div>
    </React.Fragment>
  );
}

export default App;
