import React from "react";
import "./App.scss";
import MovieCard from './components/MovieCard/MovieCard.jsx';
import {
  SnowButton,
  BuyButton,
  SimpleButton,
  GlitchButton,
} from "./components/Button/index.js";
import Typography from "./components/Typography/Typography.jsx";
import DropDown from "./components/DropDown/DropDown.jsx";

let dropdownList = [
  { value: "1", text: "Avengers End Game" },
  { value: "2", text: "Spiderman" },
  { value: "3", text: "IronMan" },
  { value: "4", text: "Doctor Strange" },
  { value: "5", text: "Black Panther" },
  { value: "6", text: "Thor" },
];

const App = () => {
  return (
    <div className="App">
      <h3>Movie Card Component</h3>
      <MovieCard></MovieCard>
      <h3>Button Components</h3>
      <SnowButton title="Snow Button"></SnowButton>
      <br></br>
      <GlitchButton title="Glitch Button"></GlitchButton>
      <br></br>
      <SimpleButton title="Simple Button"></SimpleButton>
      <br></br>
      <BuyButton title="Buy Button"></BuyButton>
      <h3>Typography Styles</h3>
      <Typography text="Title text" type="title" />
      <br></br>
      <Typography text="Paragraph Text" type="paragraph" />
      <h3>Dropdown</h3>
      <DropDown options={dropdownList}></DropDown>
    </div>
  );
};

export default App;
