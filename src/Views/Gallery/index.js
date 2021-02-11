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
} from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: theme.mixins.toolbar,
}));

//import PokemonCard from "../Components/PokemonCard";

const Gallery = ({ pokemon }) => {
  console.log(pokemon);
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div>I am the AppBar</div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <Grid container spacing={0}>
        {/* <PokemonCard pokemon={pokemon} /> */}

        {pokemon
          ? pokemon.map((i, index) => (
              <Grid item xs={12} sm={4} md={3} lg={2} xl={1}>
                <Card>
                  <CardMedia
                    height="300"
                    component="img"
                    src="https://picsum.photos/300"
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
