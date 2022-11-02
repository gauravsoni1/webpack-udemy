import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import IconSlider from '../../components/IconSlider/IconSlider.jsx';
import './Movies.scss';
import logo from '../../assets/logo.png';

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
