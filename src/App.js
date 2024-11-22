import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

        <div className="main-content">
          <Dashboard />
        </div>
    </div>
  );
}

export default App;
