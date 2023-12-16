// App.jsx
import React from "react";
import Home from "./Components/Home";
import Logo from "./Components/Logo";
import Cart from "./Components/Cart";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="navbar">
        <Home />
        <Logo />
        <Cart />
      </div>
    </div>
  );
};

export default App;
