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
  const [pokemon, setPokemon] = useState([]);
  const [games, setGames] = useState([]);
  // const [fechtAll, setFetchAll] = useState(Date.now());

  const updatePokemon = (response) => {
    const tentativePokemon = [];

    response.data.data.map((item) => {
      const singlePokemon = {
        id: item.id,
        name: item.name.english,
        type: item.type,
        weight: item.weight,
        image: item.image,
        image_small: item.image_small,
        base: {
          HP: item.base.HP,
          Attack: item.base.Attack,
          Defense: item.base.Defense,
          Speed: item.base.Speed,
          Special_Attack: item.base.Special_Attack,
          Special_Defense: item.base.Special_Defense,
        },
      };
      tentativePokemon.push(singlePokemon);

      setPokemon(tentativePokemon);
    });
  };

  // useEffect(() => {
  //   const requestPokemon = async () => {
  //     try {
  //       const request = await axios.get(
  //         "https://la-poke-lucha-dev.herokuapp.com/pokemon?limit=100"
  //       );
  //       setPokemon(request.data.data);
  //       console.log(request.data.data);
  //     } catch (e) {
  //       console.error(Error);
  //     }
  //   };
  //   requestPokemon();
  // }, []);

  //get 100 pokemon
  // useEffect(() => {
  //   const requestPokemon = async () => {
  //     try {
  //       const baseURL =
  //         "https://la-poke-lucha-dev.herokuapp.com/pokemon?limit=100";

  //       axios.get(baseURL).then((response) => updatePokemon(response));
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   requestPokemon();
  // }, []);
  // console.log(pokemon);
  ///
  useEffect(() => {
    const baseURL = "https://la-poke-lucha-dev.herokuapp.com/pokemon?limit=100";

    axios
      .get(baseURL)
      .then((response) => updatePokemon(response))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const baseURL = "http://localhost:3001/game/all";
    axios
      .get(baseURL)
      .then((response) => {
        if(response.data)
          (setGames(response.data)
      })
      .catch((err) => console.error(err));
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
          <Score games={games} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
