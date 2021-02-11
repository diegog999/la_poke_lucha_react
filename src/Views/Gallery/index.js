// import "./style.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const Gallery = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div>
      <div>I am the Gallery</div>
      <Switch>
        <Route path="/pokemon/:id/:info"></Route>
        <Route path="/pokemon/:id/">This is the id route</Route>
        <Route path="/">{JSON.stringify(pokemon)}</Route>
      </Switch>
    </div>
  );
};

export default Gallery;
