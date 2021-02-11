import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from "./Views/Gallery/";
import Stage from "./Views/Stage";
import Score from "./Views/Score";

const App = () => {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    const requestPokemon = async () => {
      try {
        const request = await axios.get(
          "https://la-poke-lucha.herokuapp.com/pokemon"
        );
        setPokemon(request.data.data);
        console.log(request.data.data);
      } catch (e) {
        console.error(Error);
      }
    };
    requestPokemon();
  }, []);

  return (
    <div className="App">
      <Stage />
      <Score />
      <Gallery pokemon={pokemon} />
    </div>
  );
};

export default App;
