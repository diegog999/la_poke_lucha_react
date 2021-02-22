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
  offset: { minHeight: 285 }, //178

  appbar: {
    padding: "1rem",
    minHeight: "250px",
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
    width: "77px",
    height: "77px",
    margin: "5% auto 0 auto",
  },

  morePokeCard: {
    backgroundColor: "black",
  },

  noDecoration: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "red",
    },
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

  //reset fighters to 0
  const resetFighter1 = () => {
    selectedFighter1(0);
  };

  const resetFighter2 = () => {
    selectedFighter2(0);
  };

  //pagination
  const handleMorePokemon = () => {
    getMorePokemon(Date.now());
  };

  //shows type drawer on click
  const [typeDrawer, setTypeDrawer] = useState("closed");
  const showTypes = () => {
    if (typeDrawer === "closed") {
      setTypeDrawer("open");
    } else {
      setTypeDrawer("closed");
      updateFilter({ name: "", type: "" });
    }
  };

  //state var & function for filtering pokemon by type

  const submitSearch = () => {
    updateFilter({ name: searchInput.current.value, type: "" });
  };

  // get random Pokemon

  const getRandomPokemon = () => {
    let randomIndex = Math.floor(Math.random() * 808);
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
          <Typography variant="h4">
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
                <Button onClick={resetFighter1}>Reset</Button>
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
                <Button onClick={resetFighter2}>Reset</Button>
              </Card>
            ) : null}

            {luchador1 && luchador2 ? (
              <NavLink
                to="/stage"
                style={{
                  margin: "0 2vmax",
                  color: "red",
                  fontSize: "3rem",
                  textDecoration: "none",
                }}
              >
                Play
              </NavLink>
            ) : null}
          </Box>
          <Typography variant="h3">la poke lucha</Typography>
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
          <Typography variant="h6">
            <NavLink to="/score" className={classes.noDecoration}>
              fight scores
            </NavLink>
          </Typography>
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
