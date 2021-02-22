//import "./style.css";
import { useState, useRef } from "react";
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
  morePokemon,
  getMorePokemon,
  selectedFighter1,
  selectedFighter2,
  updateFilter,
  types,
  luchador1,
  luchador2,
}) => {
  const classes = useStyles();
  const searchInput = useRef(null);

  console.log(morePokemon);

  //pagination
  const handleMorePokemon = () => {
    getMorePokemon(Date.now());
  };

  //shows type drawer on click
  const [typeDrawer, setTypeDrawer] = useState("closed");
  const showTypes = () => {
    typeDrawer === "closed" ? setTypeDrawer("open") : setTypeDrawer("closed");
  };

  //state var & function for filtering pokemon by type

  const submitSearch = () => {
    console.log(searchInput.current.value);
    updateFilter({ name: searchInput.current.value, type: "" });
  };

  // get random Pokemon

  const getRandomPokemon = () => {
    let randomIndex = Math.floor(Math.random() * 808);
    console.log(randomIndex);
    if (!luchador1) {
      selectedFighter1(randomIndex);
    } else if (!luchador2) {
      selectedFighter2(randomIndex);
    } else {
      alert("you have chosen two fighters already");
    }
  };

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
            ) : null}

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
              <TextField inputRef={searchInput} label="Pokemon" />
              <MenuButton onClick={submitSearch}>Submit</MenuButton>
            </div>
            <MenuButton onClick={showTypes}>type</MenuButton>
            <MenuButton onClick={getRandomPokemon}>random</MenuButton>
          </Toolbar>
          <NavLink to="/score">
            <Typography>fight scores</Typography>
          </NavLink>
        </Box>
        <Box
          className={
            typeDrawer === "closed"
              ? classes.typeDrawerClosed
              : classes.typeDrawerOpen
          }
        >
          <MenuButton
            value="All"
            onClick={() => updateFilter({ name: "", type: "" })}
          >
            All
          </MenuButton>
          {types.map((type, index) => (
            <MenuButton
              key={index}
              value={type}
              onClick={() => updateFilter({ name: "", type: type })}
            >
              {type}
            </MenuButton>
          ))}
        </Box>
      </AppBar>
      <div className={classes.offset} />
      <Grid container spacing={0}>
        <PokemonCard
          pokemon={pokemon.length ? pokemon : console.log("loading")}
          choosefighter1={selectedFighter1}
          choosefighter2={selectedFighter2}
          fighter1={luchador1 ? luchador1.id : ""}
          fighter2={luchador2 ? luchador2.id : ""}
        />
        {pokemon.length && morePokemon !== "" ? (
          <Card className={classes.morePokeCard}>
            <CardContent>
              <Link
                href="#"
                onClick={handleMorePokemon}
                underline="none"
                color="primary"
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
