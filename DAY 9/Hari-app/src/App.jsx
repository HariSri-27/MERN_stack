import React, { useState } from "react";
import data from "./data/data.json";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Subjects from "./components/Subjects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {!isLoggedIn ? (
        <Login users={data.users} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Home />
          <Subjects subjects={data.subjects} />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;