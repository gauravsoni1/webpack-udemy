import React from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/button/Button.jsx";
import IconSlider from "../../components/IconSlider/IconSlider.jsx";
import "./Movies.scss";
import { useHistory } from "react-router-dom";

const Movies = () => {
  const history = useHistory();

  const logOut = () => {
    history.push("/login");
  };

  return (
    <div className="movies-main-container">
      <header>
        <img className="logo-img" src={logo} alt="logo" />
        <div>
          <Button title="Sign Out" onClick={logOut}></Button>
        </div>
      </header>
      <IconSlider title="Continue Watching .."></IconSlider>
      <IconSlider title="To 10 Globally .."></IconSlider>
    </div>
  );
};

export default Movies;
