import React from "react";
import "./IconSlider.scss";

const movies = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
];

const IconSlider = (props) => {
  const randomMovie = (items) => {
    let movList = [];
    for (let i = 0; i < items; i++) {
      let counter = Math.round(Math.random() * 15);
      let key = Date.now() * Math.random();
      let mov = (
        <img
          key={key}
          src={require(`../../assets/${movies[counter]}`)}
          alt=""
        />
      );
      movList.push(mov);      
    }
    return movList;
  };

  return (
    <div className="list-container">
      <div className="list-title">{props.title}</div>
      <div className="movies-container">{randomMovie(5)}</div>
    </div>
  );
};

export default IconSlider;
