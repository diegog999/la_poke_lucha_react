import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";

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
  // console.log(randomColour);
  return randomColour;
};

const selectPokemon = (e) => {
  console.log(e.currentTarget.id);
};

const MakePokemonCard = ({ p }) => {
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

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      lg={2}
      xl={1}
      onClick={selectPokemon}
      id={p.id}
    >
      <Card square={true} className={classes.pokemonCard}>
        <CardMedia
          className={classes.picture}
          component="img"
          src={p.image_small}
        ></CardMedia>
        <CardContent>{p.name}</CardContent>
      </Card>
    </Grid>
  );
};

const PokemonCard = ({ pokemon }) => {
  //--JSS classes
  console.log(pokemon);

  return (
    <>
      {pokemon
        ? pokemon.map((p, index) => <MakePokemonCard p={p} key={index} />)
        : console.log("sorry")}
    </>
  );
};

export default PokemonCard;
