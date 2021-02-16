import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

//random colour on hover
const colourArray = [
  "blue",
  "blueviolet",
  "brown",
  "chartreuse",
  "coral",
  "crimson",
  "deepskyblue",
  "fuchsia",
  "gold",
  "mediumpurple",
  "hotpink",
  "lime",
  "red",
  "yellow",
  "orange",
  "purple",
];

const getColour = () => {
  let randomIndex = Math.floor(Math.random() * 16);
  let randomColour = colourArray[randomIndex];
  console.log(randomColour);
  return randomColour;
};

const PokemonCard = ({ pokemon }) => {
  const [colour, setColour] = useState("red");
  //--JSS classes
  const useStyles = makeStyles((theme) => ({
    picture: { width: "130px", height: "130px", margin: "auto" },

    pokemonCard: {
      background: "white",
      "&:hover": {
        background: getColour(),
      },
    },
  }));

  const classes = useStyles();

  const makePokemonCard = (i, index) => {
    getColour();
    return (
      <Grid item key={index + 1} xs={12} sm={4} md={3} lg={2} xl={1}>
        <Card square={true} className={classes.pokemonCard}>
          <CardMedia
            className={classes.picture}
            component="img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
          ></CardMedia>
          <CardContent>{i.name.english}</CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      {pokemon
        ? pokemon.map((i, index) => makePokemonCard(i, index))
        : console.log("sorry")}
    </>
  );
};

export default PokemonCard;
