import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
//Material UI
import CssBaseline from "@material-ui/core/CssBaseline";

//Views
import Gallery from "./Gallery.js";
import Stage from "./Stage.js";
import Score from "./Score.js";

const App = () => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    const requestPokemon = async () => {
      try {
        const request = await axios.get(
          "https://la-poke-lucha.herokuapp.com/pokemon"
        );
        setPokemon(request.data.data);
      } catch (e) {
        console.error(Error);
      }
    };
    requestPokemon();
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Gallery pokemon={pokemon} />
        </Route>
        <Route exact path="/stage">
          <Stage />
        </Route>
        <Route exact path="/score">
          <Score />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
