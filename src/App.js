import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    const requestPokemon = async () => {
      try {
        const request = await axios.get(
          "https://la-poke-lucha.herokuapp.com/pokemon"
        );
        setPokemon(request);
      } catch (e) {
        console.error(Error);
      }
    };
    requestPokemon();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/pokemon/:id/:info"></Route>
        <Route path="/pokemon/:id/">This is the id route</Route>
        <Route path="/">{JSON.stringify(pokemon)}</Route>
      </Switch>
    </div>
  );
}

export default App;
