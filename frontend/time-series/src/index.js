import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home.js";
const App = () => {
  return (
    <>
      <Home />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
