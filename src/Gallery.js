//import "./style.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PokemonCard from "./Components/PokemonCard.js";

//--Material UI components
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Box,
  TextField,
  InputBase,
  Button,
  Link,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
//--Material UI style
import { makeStyles, withStyles } from "@material-ui/core/styles";

//--JSS classes
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: { minHeight: 250 }, //178

  appbar: {
    padding: "1rem",
    height: "250px",
    backgroundColor: "black",
  },

  toolbar: {
    display: "flex",
    alignItems: "flex-end",
  },

  searchContainer: {
    marginRight: "2vw",
    display: "flex",
    alignItems: "flex-end",
  },

  typeDrawerOpen: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    height: "auto",
    backgroundColor: "black",
    width: "100vw",
  },

  typeDrawerClosed: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    height: 0,
    overflow: "hidden",
  },

  selectedFighter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  luchadorCard: {
    margin: "0 3%",
    textAlign: "center",
  },

  thumbnail: {
    width: "70px",
    height: "70px",
    margin: "auto",
  },

  morePokeCard: {
    backgroundColor: "black",
  },
}));

//menu styling
const MenuButton = withStyles((theme) => ({
  root: {
    color: "white",
    "&:hover": {
      color: "red",
    },
  },
}))(Button);

const Gallery = ({
  pokemon,
  getMorePokemon,
  selectedFighter1,
  selectedFighter2,
  types,
  chooseType,
  luchador1,
  luchador2,
}) => {
  const classes = useStyles();

  console.log(luchador1, luchador2);

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

  //shows type drawer on click
  const [typeDrawer, setTypeDrawer] = useState("closed");
  const showTypes = () => {
    typeDrawer === "closed" ? setTypeDrawer("open") : setTypeDrawer("closed");
  };

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

  // console.log(`nameFilter:${nameFilter} typeFilter:${typeFilter} `);

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
          <Typography
            variant="h4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            choose <br></br>your fighter
          </Typography>
          <Box className={classes.selectedFighter}>
            {luchador1 ? (
              <Card square={true} className={classes.luchadorCard}>
                <CardMedia
                  className={classes.thumbnail}
                  component="img"
                  src={luchador1.image_small}
                ></CardMedia>
                <CardContent>Fighter 1: {luchador1.name}</CardContent>
              </Card>
            ) : (
              console.log("no luchador")
            )}

            {luchador2 ? (
              <Card square={true} className={classes.luchadorCard}>
                <CardMedia
                  className={classes.thumbnail}
                  component="img"
                  src={luchador2.image_small}
                ></CardMedia>
                <CardContent>Fighter 2: {luchador2.name}</CardContent>
              </Card>
            ) : null}

            {luchador1 && luchador2 ? (
              <NavLink to="/stage">
                <Link
                  underline="none"
                  style={{ margin: "0 2vmax", color: "red", fontSize: "3rem" }}
                >
                  Play
                </Link>
              </NavLink>
            ) : null}
          </Box>
          <Typography variant="h4" style={{ fontFamily: "'Bangers', cursive" }}>
            la poke lucha
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Toolbar disableGutters={true} className={classes.toolbar}>
            <div className={classes.searchContainer}>
              <SearchIcon style={{ margin: "0 8px" }} />
              <TextField onChange={handleSearch} label="Pokemon" />
            </div>
            <MenuButton onClick={showTypes} color="">
              type
            </MenuButton>
            <MenuButton>sort</MenuButton>
            <MenuButton>random</MenuButton>
          </Toolbar>
          <Typography>fight scores</Typography>
        </Box>
        <Box
          className={
            typeDrawer === "closed"
              ? classes.typeDrawerClosed
              : classes.typeDrawerOpen
          }
        >
          <MenuButton value="All" onClick={handleTypeFilter}>
            All
          </MenuButton>
          {types.map((type, index) => (
            <MenuButton key={index} value={type} onClick={handleTypeFilter}>
              {type}
            </MenuButton>
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
        {pokemon.length ? (
          <Card className={classes.morePokeCard}>
            <CardContent>
              <Link
                href="#"
                onClick={handleMorePokemon}
                // color="white"
                underline="none"
                color="Secondary"
              >
                More Pokemon
              </Link>
            </CardContent>
          </Card>
        ) : null}
      </Grid>
    </>
  );
};

export default Gallery;
