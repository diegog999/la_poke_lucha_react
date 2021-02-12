//import "./style.css";
import { useState, useEffect } from "react";

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
} from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: { minHeight: 178 },
}));

//import PokemonCard from "../Components/PokemonCard";

const Gallery = ({ pokemon }) => {
  console.log(pokemon);
  const classes = useStyles();

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
            <Typography>search</Typography>
            <Typography>type</Typography>
            <Typography>sort</Typography>
            <Typography>random</Typography>
          </Toolbar>
          <Typography>fight scores</Typography>
        </Box>
      </AppBar>
      <div className={classes.offset} />
      <Grid container spacing={0}>
        {/* <PokemonCard pokemon={pokemon} /> */}

        {pokemon
          ? pokemon.map((i, index) => (
              <Grid key={index} item xs={12} sm={4} md={3} lg={2} xl={1}>
                <Card square={true}>
                  <CardMedia
                    style={{ width: "130px", height: "130px" }}
                    component="img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`}
                  ></CardMedia>
                  <CardContent>{i.name.english}</CardContent>
                </Card>
              </Grid>
            ))
          : console.log("sorry")}

        {/* {JSON.stringify(pokemon)} */}
      </Grid>
    </>
  );
};

export default Gallery;
