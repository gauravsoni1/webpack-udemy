import React, { Suspense, useState } from "react";
const Typography = React.lazy(()=> import("components/Typography"))
import "./QuickBooking.scss";

const QuickBooking = () => {
  const [movie, setMovie] = useState("1");
  const [date, setDate] = useState("01/02/2022");
  const [time, setTime] = useState("10 Am");

  const bookMovie = () => {
    const booking = {
      movie,
      date,
      time,
    };
    console.log(booking);
  };

  return (
    <div className="quick-booking-container">
      <Suspense fallback={null}>
        <Typography text="Quick Booking" type="title"></Typography>
      </Suspense>
      {/* <span className="header">Quick Booking </span> */}
      <div className="spacer"></div>
      <div className="mr-1">
        <span>Select Movie</span>
        <select onChange={(e) => setMovie(e.target.value)} value={movie}>
          <option value="1">Avengers End Game</option>
          <option value="2">Spiderman</option>
          <option value="3">IronMan</option>
          <option value="4">Doctor Strange</option>
          <option value="5">Black Panther</option>
          <option value="6">Thor</option>
          <option value="7">Captain America</option>
          <option value="8">Black Widow</option>
          <option value="9">Venom</option>
          <option value="10">Ethernals</option>
        </select>
      </div>
      <div className="mr-1">
        <span>Select Date: </span>
        <select onChange={(e) => setDate(e.target.value)} value={date}>
          <option value="01/02/2022">01/02/2022</option>
          <option value="02/02/2022">02/02/2022</option>
          <option value="03/02/2022">03/02/2022</option>
          <option value="04/02/2022">04/02/2022</option>
          <option value="05/02/2022">05/02/2022</option>
        </select>
      </div>

      <div className="mr-1">
        <span>Select Time: </span>
        <select onChange={(e) => setTime(e.target.value)} value={time}>
          <option value="10 Am">10 Am</option>
          <option value="12:30 PM">12:30 PM</option>
          <option value="4 PM">4 PM</option>
          <option value="8 PM">8 PM</option>
          <option value="9:30 PM">9:30 PM</option>
        </select>
      </div>
      <button onClick={() => bookMovie()}>Book</button>
    </div>
  );
};

export default QuickBooking;
