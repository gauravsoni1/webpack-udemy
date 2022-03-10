import React from 'react';
import logo from '../../assets/logo.png';
import Button from '../../components/button/Button.jsx';
import IconSlider from '../../components/IconSlider/IconSlider.jsx';
import './Movies.scss';
import { useHistory } from 'react-router-dom';

function Movies() {
  const history = useHistory();

  const logOut = () => {
    history.push('/login');
  };

  return (
    <div className="movies-main-container">
      <header>
        <img className="logo-img" src={logo} alt="logo" />
        <div>
          <Button title="Sign Out" onClick={logOut} />
        </div>
      </header>
      <IconSlider title="Continue Watching .." />
      <IconSlider title="To 10 Globally .." />
    </div>
  );
}

export default Movies;
