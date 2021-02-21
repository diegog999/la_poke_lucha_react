import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
//Material UI
import CssBaseline from "@material-ui/core/CssBaseline";

//Views
import Gallery from "./Gallery.js";
import Stage from "./Stage.js";
import Score from "./Score.js";

const App = () => {
  const [{ pokemon, nextURL }, setPokemon] = useState({
    pokemon: [],
    nextURL: "",
  });

  console.log(pokemon);
  const [morePokeTrigger, setMorePokeTrigger] = useState("");
  const [filter, setFilter] = useState({ name: "", type: "" });

  const [types, setTypes] = useState([]);
  const [luchador1, setLuchador1] = useState("");
  const [luchador2, setLuchador2] = useState("");

  //format list of types
  const updateTypes = (response) => {
    let arrayofTypes = [];
    response.map((type) => arrayofTypes.push(type.name));
    setTypes(arrayofTypes);
  };

  const setFighter1Handler = (id) => {
    const baseURL = "https://la-poke-lucha-dev.herokuapp.com/pokemon/";
    axios
      .get(baseURL + id)
      .then((response) => {
        updateLuchador1(response.data.data);
      })
      .catch((err) => console.error(err));
  };
  const setFighter2Handler = (id) => {
    const baseURL = "https://la-poke-lucha-dev.herokuapp.com/pokemon/";
    axios
      .get(baseURL + id)
      .then((response) => {
        updateLuchador2(response.data.data);
      })
      .catch((err) => console.error(err));
  };
  //get list of types
  useEffect(() => {
    const baseURL = "https://la-poke-lucha-dev.herokuapp.com/types";
    axios
      .get(baseURL)
      .then((response) => {
        updateTypes(response.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  //format response for all pokemon
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
    });
    filter
      ? setPokemon({
          pokemon: tentativePokemon,
          nextURL: response.data.next ? response.data.next : "",
        })
      : setPokemon({
          pokemon: [...pokemon, ...tentativePokemon],
          nextURL: response.data.next ? response.data.next : "",
        });
  };

  // format response fighter 1
  const updateLuchador1 = (item) => {
    const singleFighter = {
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
    setLuchador1(singleFighter);
  };

  // format response fighter 2
  const updateLuchador2 = (item) => {
    const singleFighter = {
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
    setLuchador2(singleFighter);
  };

  //get up to 100 pokemon by name & type search
  useEffect(() => {
    console.log("filter" + JSON.stringify(filter));
    const baseURL = "https://la-poke-lucha-dev.herokuapp.com/pokemon?limit=100";
    let finalURL = baseURL;
    if (filter.name) {
      finalURL += `&name=${filter.name}`;
    }
    if (filter.type) {
      finalURL += `&type=${filter.type}`;
    }
    console.log(finalURL);
    axios
      .get(finalURL)
      .then((response) => {
        updatePokemon(response);
      })
      .catch((err) => console.error(err));
  }, [filter]);

  //get next 100 pokemon
  useEffect(() => {
    axios
      .get(nextURL)
      .then((response) => {
        updatePokemon(response);
      })
      .catch((err) => console.error(err));
  }, [morePokeTrigger]);

  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Gallery
            pokemon={pokemon}
            morePokemon={nextURL}
            getMorePokemon={(morePokeTrigger) =>
              setMorePokeTrigger(morePokeTrigger)
            }
            updateFilter={(filter) => setFilter(filter)}
            types={types}
            selectedFighter1={(selectedFighter1) =>
              setFighter1Handler(selectedFighter1)
            }
            selectedFighter2={(selectedFighter2) =>
              setFighter2Handler(selectedFighter2)
            }
            luchador1={luchador1}
            luchador2={luchador2}
          />
        </Route>
        <Route exact path="/stage">
          <Stage luchador1={luchador1} luchador2={luchador2} />
        </Route>
        <Route exact path="/score">
          <Score />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
