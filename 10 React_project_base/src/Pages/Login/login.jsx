import React from "react";
import "./login.scss";
import logo from "../../assets/logo.png";
import Button from '../../components/button/Button.jsx'
import Signin from "../../components/signIn/signin.jsx";
import {useHistory} from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const signInToMoviesNow = () =>{    
    history.push("/movies")
  }

  return (
    <div className="background">
      <header>
        <img className="logo-img" src={logo} alt="logo" />
        <div>
          <Button title="Sign In" onClick={signInToMoviesNow}></Button>
        </div>
      </header>
      <main>
        <Signin></Signin>
        {/* <h1>Watch TV Shows , Movies !!</h1>
        <h3> Subscribe now , Cancel anytime</h3> */}
      </main>
    </div>
  );
};

export default Login;
