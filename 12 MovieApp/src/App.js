import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import BookPage from "./components/BookPage/BookPage.jsx";

const App = () => {
  return (
    <Switch>
      <Route path="/details">
        <DetailsPage></DetailsPage>
      </Route>
      <Route path="/book">
        <BookPage></BookPage>
      </Route>
      <Route path="/">
        <Homepage></Homepage>
      </Route>
    </Switch>
  );
};

export default App;
