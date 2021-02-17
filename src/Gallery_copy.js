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
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
//--JSS classes
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: { minHeight: 178 },

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
}));

//shuffles pokemon array on load
const shuffleArray = ([...arr]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

//shows type drawer on click
const showTypes = () => {};

const Gallery = ({ pokemon }) => {
  const classes = useStyles();

  console.log(pokemon);

  let shuffledPokemon = [];
  pokemon
    ? (shuffledPokemon = shuffleArray(pokemon))
    : console.log("sorry but no sorry");

  console.log(shuffledPokemon);
  const [typeFilter, setTypeFilter] = useState("");

  const handleTypeFilter = (e) => {
    let type = e.currentTarget.value;
    type = type[0].toUpperCase() + type.slice(1);
    setTypeFilter(type);
  };

  //state var & function for searching pokemon
  const [nameFilter, setNameFilter] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState(shuffledPokemon);

  console.log(nameFilter, typeFilter);

  const handleSearch = (e) => {
    let lcFilter = e.target.value.toLowerCase();
    setNameFilter(lcFilter);
  };

  const handleFiltering = () => {
    const pokemonArray = shuffledPokemon.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(nameFilter) &&
        (typeFilter.length ? pokemon.type.includes(typeFilter) : true)
    );
    setFilteredPokemon(pokemonArray);
  };

  useEffect(() => {
    if (nameFilter.length && typeFilter.length) {
      handleFiltering();
    }
  }, [nameFilter, typeFilter]);

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h2">choose your fighter</Typography>
          <Box>Fighter 1 / Fighter 2 / Play</Box>
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
          <Button>All</Button>
          <Button onClick={handleTypeFilter} value="grass">
            Grass
          </Button>
          <Button onClick={handleTypeFilter} value="poison">
            Poison
          </Button>
          <Button onClick={handleTypeFilter} value="fire">
            Fire
          </Button>
          <Button>Grass</Button>
          <Button>Poison</Button>
          <Button>Fire</Button>
          <Button>Grass</Button>
          <Button>Poison</Button>
          <Button>Fire</Button>
          <Button>Grass</Button>
          <Button>Poison</Button>
          <Button>Fire</Button>
          <Button>Grass</Button>
          <Button>Poison</Button>
          <Button>Fire</Button>
          <Button>Grass</Button>
          <Button>Poison</Button>
          <Button>Fire</Button>
          <Button>Grass</Button>
          <Button>Poison</Button>
        </Box>
      </AppBar>
      <div className={classes.offset} />
      <Grid container spacing={0}>
        <PokemonCard
          pokemon={filteredPokemon.length ? filteredPokemon : shuffledPokemon}
        />
        {console.log(filteredPokemon)}
      </Grid>
    </>
  );
};

export default Gallery;
