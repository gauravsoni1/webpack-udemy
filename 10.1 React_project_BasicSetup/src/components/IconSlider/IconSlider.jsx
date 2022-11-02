import React from 'react';
import './IconSlider.scss';

const movies = [
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg',
  '10.jpeg',
  '11.jpeg',
  '12.jpeg',
  '13.jpeg',
  '14.jpeg',
  '15.jpeg',
];

function IconSlider(props) {
  const randomMovie = (items) => {
    const movList = [];
    try {
      for (let i = 0; i < items; i++) {
        const counter = Math.round(Math.random() * 15);
        const key = Date.now() * Math.random();
        const mov = (
          <img
            key={key}
            src={require(`../../assets/${movies[counter]}`)}
            alt=""
          />
        );
        movList.push(mov);
      }
    } catch (error) {
      console.log(error);
    }

    return movList;
  };

  return (
    <div className="list-container">
      <div className="list-title">{props.title}</div>
      <div className="movies-container">{randomMovie(5)}</div>
    </div>
  );
}

export default IconSlider;
