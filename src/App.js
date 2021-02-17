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
  const [pokemon, setPokemon] = useState([]);
  const [morePokemon, setMorePokemon] = useState("");
  const [morePokeTrigger, setMorePokeTrigger] = useState("");
  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  const [selectedFighter1, setSelectedFighter1] = useState("");
  const [selectedFighter2, setSelectedFighter2] = useState("");
  const [luchador1, setLuchador1] = useState();
  const [luchador2, setLuchador2] = useState();

  // const luch1 = useRef();
  // useEffect(() => {
  //   luch1.current = selectedFighter1;
  // });

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const luch1 = usePrevious(selectedFighter1);

  //format list of types
  const updateTypes = (response) => {
    let arrayofTypes = [];
    response.map((type) => arrayofTypes.push(type.name));
    setTypes(arrayofTypes);
  };

  //get list of types
  useEffect(() => {
    const baseURL = "https://la-poke-lucha.herokuapp.com/types";
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
    setPokemon(tentativePokemon);
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

  //get fighter1 by id
  useEffect(() => {
    const baseURL = "https://la-poke-lucha.herokuapp.com/pokemon/";
    axios
      .get(baseURL + selectedFighter1)
      .then((response) => {
        updateLuchador1(response.data.data);
      })
      .catch((err) => console.error(err));
  }, [selectedFighter1]);

  //get fighter2 by id
  useEffect(() => {
    const baseURL = "https://la-poke-lucha.herokuapp.com/pokemon/";
    axios
      .get(baseURL + selectedFighter2)
      .then((response) => {
        updateLuchador2(response.data.data);
      })
      .catch((err) => console.error(err));
  }, [selectedFighter2]);

  //get 100 pokemon by type
  useEffect(() => {
    const baseURL =
      "https://la-poke-lucha.herokuapp.com/pokemon?limit=100&type=";
    axios
      .get(baseURL + type)
      .then((response) => {
        updatePokemon(response);
        setMorePokemon(response.data.next);
      })
      .catch((err) => console.error(err));
  }, [type]);

  //get 100 pokemon
  useEffect(() => {
    const baseURL = "https://la-poke-lucha.herokuapp.com/pokemon?limit=100";
    axios
      .get(baseURL)
      .then((response) => {
        updatePokemon(response);
        setMorePokemon(response.data.next);
      })
      .catch((err) => console.error(err));
  }, []);

  //get next 100 pokemon
  useEffect(() => {
    axios
      .get(morePokemon)
      .then((response) => {
        updatePokemon(response);
        setMorePokemon(response.data.next);
      })
      .catch((err) => console.error(err));
  }, [morePokeTrigger]);

  console.log(
    `type:${type} id1: ${luch1}, id2: ${selectedFighter2}, fighter1: ${luchador1}, fighter2: ${luchador2}`
  );

  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Gallery
            pokemon={pokemon}
            getMorePokemon={(morePokeTrigger) =>
              setMorePokeTrigger(morePokeTrigger)
            }
            types={types}
            chooseType={(type) => setType(type)}
            selectedFighter1={(selectedFighter1) =>
              setSelectedFighter1(selectedFighter1)
            }
            selectedFighter2={(selectedFighter2) =>
              setSelectedFighter2(selectedFighter2)
            }
          />
        </Route>
        <Route exact path="/stage">
          <Stage luchador1={luch1} luchador2={luchador2} />
        </Route>
        <Route exact path="/score">
          <Score />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
