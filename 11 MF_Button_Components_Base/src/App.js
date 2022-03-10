import React from "react";
import "./App.scss";

import GlitchButton from "./components/Glitch/Glitch.jsx";
import SimpleButton from "./components/SimpleButton/SimpleButton.jsx";
import Snow from "./components/Snow/Snow.jsx";
import BuyButton from "./components/BuyButton/BuyButton.jsx";

function App() {
  return (
    <div className="App">
      <h2>Button component library</h2>
      <div>
        <SimpleButton title="Simple button"></SimpleButton>
      </div>
      <div className="mt-10">
        <Snow title="Moving Button"></Snow>
      </div>
      <div className="mt-10">
        <GlitchButton title="Glitch Button"></GlitchButton>
      </div>
      <div className="mt-10">
        <BuyButton title="Buy"></BuyButton>
      </div>
    </div>
  );
}

export default App;
