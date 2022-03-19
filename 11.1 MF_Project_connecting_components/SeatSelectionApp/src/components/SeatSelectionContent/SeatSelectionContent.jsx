import React, { useEffect, useState } from "react";
import "./SeatSelectionContent.scss";

const SeatSelectionContent = () => {
  const [bookingData, setBookingData] = useState({
    movie: "Select Movie",
    date: "Select Date",
    time: "Select Time",
    imageUrl: "",
  });
  const [seatsCount, setSeatsCount] = useState(0);

  const loadBooking = async (booking) => {
    const resp = await fetch("http://localhost:5555/movies");
    const data = await resp.json();

    const selectedMovie = data.filter((movie) => {
      return movie.id === parseInt(booking.movie);
    });

    setBookingData({
      movie: selectedMovie[0].name,
      date: booking.date,
      time: booking.time,
      imageUrl: selectedMovie[0].imageUrl,
    });
  };

  const renderImage = () => {
    const imgUrl = `http://localhost:5555/images/${bookingData.imageUrl}`;
    return <img src={imgUrl}></img>;
  };

  const toggleSeatSelection = (e) => {
    if (e.target.classList.contains("selected")) {
      setSeatsCount(seatsCount - 1);
    } else {
      setSeatsCount(seatsCount + 1);
    }
    e.target.classList.toggle("selected");
  };

  const renderSeats = () => {
    let seats = [1, 2, 3, 4, 5, 6, 7];
    return seats.map((seat) => (
      <div className="seat" key={seat} onClick={toggleSeatSelection}>
        {seat}
      </div>
    ));
  };

  const seatsBooked = () => {
    alert(
      `Movie Booked ${bookingData.movie}, seats Booked ${seatsCount} -- ENJOY !!!!!`
    );
  };

  return (
    <div className="seat-selection-container">
      <div className="column">{renderImage()}</div>
      <div className="column full-width p-20">
        <span className="movie-title">{bookingData.movie}</span>
        <span className="mt-2"> Book Movie</span>
        <span className="mt-2">
          Selected Date : <strong>{bookingData.date}</strong>
        </span>
        <span className="mt-2">
          Time Selected : <strong>{bookingData.time}</strong>
        </span>

        <div className="screen-select-container mt-2">
          <div className="screen">Screen</div>
          <div className="seats-container mt-2">{renderSeats()}</div>
        </div>

        <div className="row mt-2 space-between">
          <span>
            Selected Seats : <strong>{seatsCount}</strong>
          </span>
          <span>
            Total Cost <strong>{seatsCount * 10}$</strong>
          </span>
          <button onClick={seatsBooked}>Book</button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionContent;
