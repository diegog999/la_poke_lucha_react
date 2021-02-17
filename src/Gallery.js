//import "./style.css";
import { useState, useEffect } from "react";
import PokemonCard from "./Components/PokemonCard.js";

//--Material UI components
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
//--JSS classes
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: { minHeight: 287 }, //178

  appbar: { padding: "1rem" },
  toolbar: { display: "flex", alignItems: "flex-end" },

  searchContainer: {
    marginRight: "2vw",
    display: "flex",
    alignItems: "flex-end",
  },

  typeDrawer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    // height: 0,
  },

  selectedFighter: {
    background: "red",
  },
}));

const Gallery = ({
  pokemon,
  getMorePokemon,
  selectedFighter1,
  selectedFighter2,
  types,
  chooseType,
}) => {
  const classes = useStyles();

  // const preventDefault = (event) => event.preventDefault();

  //shuffles pokemon array on load
  const shuffleArray = ([...arr]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  let shuffledPokemon = [];
  pokemon
    ? (shuffledPokemon = shuffleArray(pokemon))
    : console.log("sorry but no sorry");

  //pagination
  const handleMorePokemon = () => {
    getMorePokemon(Date.now());
  };

  //figher selection
  const [fighter1, setFighter1] = useState("");
  const [fighter2, setFighter2] = useState("");

  // selectedFighter1(fighter1);

  //shows type drawer on click
  const showTypes = () => {};

  //state var & function for filtering pokemon by type
  const [typeFilter, setTypeFilter] = useState("");

  const handleTypeFilter = (e) => {
    let type = e.currentTarget.value;
    if (type.length) {
      type = type[0].toUpperCase() + type.slice(1);
      setTypeFilter(type);
    } else setTypeFilter(type);
  };

  // const handleFiltering = () => {
  //   const pokemonArray = shuffledPokemon.filter(
  //     (pokemon) =>
  //       pokemon.name.toLowerCase().includes(nameFilter) &&
  //       (typeFilter.length ? pokemon.type.includes(typeFilter) : true)
  //   );
  //   setFilteredPokemon(pokemonArray);
  // };

  //state var & function for searching pokemon
  const [nameFilter, setNameFilter] = useState("");
  // const [filteredPokemon, setFilteredPokemon] = useState(shuffledPokemon);

  console.log(`nameFilter:${nameFilter} typeFilter:${typeFilter} `);

  const handleSearch = (e) => {
    let lcFilter = e.target.value.toLowerCase();
    setNameFilter(lcFilter);
  };

  useEffect(() => {
    if (nameFilter.length || typeFilter.length) {
      // handleFiltering();
      chooseType(typeFilter);
    }
  }, [nameFilter, typeFilter]);

  // console.log(fighter1, fighter2);

  useEffect(() => {
    selectedFighter1(fighter1);
  }, [fighter1]);

  useEffect(() => {
    selectedFighter2(fighter2);
  }, [fighter2]);

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h2">choose your fighter</Typography>
          <Box className={classes.selectedFighter}>
            Fighter 1 {fighter1} / Fighter 2 {fighter2}/{" "}
            <Link href="/stage">Play</Link>
          </Box>
          <Typography variant="h1">la poke lucha</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Toolbar disableGutters={true} className={classes.toolbar}>
            <div className={classes.searchContainer}>
              <SearchIcon />
              <TextField onChange={handleSearch} label="Pokemon" />
            </div>
            <Button onClick={showTypes}>type</Button>
            <Button>sort</Button>
            <Button>random</Button>
          </Toolbar>
          <Typography>fight scores</Typography>
        </Box>
        <Box className={classes.typeDrawer}>
          <Button value="All" onClick={handleTypeFilter}>
            All
          </Button>
          {types.map((type, index) => (
            <Button key={index} value={type} onClick={handleTypeFilter}>
              {type}
            </Button>
          ))}
        </Box>
      </AppBar>
      <div className={classes.offset} />
      <Grid container spacing={0}>
        <PokemonCard
          // pokemon={shuffledPokemon.length > 1 ? shuffledPokemon : pokemon}
          pokemon={shuffledPokemon.length ? shuffledPokemon : pokemon}
          choosefighter1={(fighter1) => setFighter1(fighter1)}
          choosefighter2={(fighter2) => setFighter2(fighter2)}
          fighter1={fighter1}
          fighter2={fighter2}
        />
        <Link href="#" onClick={handleMorePokemon}>
          More Pokemon
        </Link>
      </Grid>
    </>
  );
};

export default Gallery;
