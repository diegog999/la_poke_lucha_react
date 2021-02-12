//import "./style.css";
import { useState } from "react";
import PokemonCard from "./Components/PokemonCard.js";

//--Material UI components
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: { minHeight: 178 },

  picture: { width: "130px", height: "130px", margin: "auto" },

  searchContainer: { marginRight: "2vw" },
}));

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

const Gallery = ({ pokemon }) => {
  pokemon ? shuffleArray(pokemon) : console.log("sorry but no sorry");

  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const handleSearch = (e) => {
    let lcFilter = e.target.value.toLowerCase();
    setFilter(lcFilter);
  };

  return (
    <>
      <AppBar position="fixed">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h2">choose your fighter</Typography>
          <Typography variant="h1">la poke lucha</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Toolbar
            display="flex"
            justifyContent="space-between"
            disableGutters={true}
            style={{ width: "1000px" }}
          >
            <div className={classes.searchContainer}>
              <SearchIcon />
              <TextField onChange={handleSearch} label="Pokemon" />
            </div>
            <Button>type</Button>
            <Button>sort</Button>
            <Button>random</Button>
          </Toolbar>
          <Typography>fight scores</Typography>
        </Box>
      </AppBar>
      <div className={classes.offset} />
      <Grid container spacing={0}>
        <PokemonCard pokemon={pokemon} filter={filter} />
      </Grid>
    </>
  );
};

export default Gallery;
