import React from "react";
import Button from "../button/Button.jsx";
// import Header from '../../components/header/header';
import Inputbox from "../inputbox/inputbox.jsx";
import "./signin.scss";
import { useHistory } from "react-router-dom";

const Signin = () => {
  let history = useHistory();

  const loginToSite = () => {    
    history.push("/movies");
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <Inputbox placeholder="Enter Username" error="someerror" />
      <Inputbox placeholder="Enter Password" />
      <Button
        className="signin-btn"
        title="Sign In"
        onClick={loginToSite}
      ></Button>
      {/* <Header></Header> */}
    </div>
  );
};

export default Signin;
