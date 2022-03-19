import React from "react";
import "./MovieCard.scss";
import Typography from "../Typography/Typography.jsx";

const MovieCard = ({ title = "Avenger", imageUrl }) => {
  let imgFinalUrl;
  if (imageUrl) {
    imgFinalUrl = `http://localhost:5555/images/${imageUrl}`;
  } else {
    imgFinalUrl =
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg";
  }

  return (
    <div className="card">
      <img src={imgFinalUrl} alt="" />
      <Typography text={title} type="title"></Typography>
    </div>
  );
};

export default MovieCard;
