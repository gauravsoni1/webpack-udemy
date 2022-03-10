import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Movies from "./Pages/Movies/Movies.jsx";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/movies" component={Movies}></Route>        
        <Route path="/">
          <Redirect to="/login"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
