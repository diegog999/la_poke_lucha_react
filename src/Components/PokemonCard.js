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
  return randomColour;
};

const MakePokemonCard = ({
  p,
  choosefighter1,
  choosefighter2,
  fighter1,
  fighter2,
}) => {
  //--JSS classes
  const useStyles = makeStyles((theme) => ({
    picture: {
      width: "130px",
      height: "130px",
      margin: "auto",
      cursor: "pointer",
    },

    pokemonCard: {
      textAlign: "center",
      background: "white",
      "&:hover": {
        background: getColour(),
      },
    },
  }));

  const classes = useStyles();

  const selectPokemon = (e) => {
    if (fighter1 == 0) {
      choosefighter1(e.currentTarget.id);
    } else if (fighter2 == 0) {
      choosefighter2(e.currentTarget.id);
    } else if (fighter1 !== 0 && fighter2 !== 0) {
      alert("you have already chosen your two fighters!");
    }
  };

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

const PokemonCard = ({
  pokemon,
  choosefighter1,
  choosefighter2,
  fighter1,
  fighter2,
}) => {
  return (
    <>
      {pokemon
        ? pokemon.map((p, index) => (
            <MakePokemonCard
              p={p}
              key={index}
              choosefighter1={choosefighter1}
              choosefighter2={choosefighter2}
              fighter1={fighter1}
              fighter2={fighter2}
            />
          ))
        : console.log("no pokemon yet")}
    </>
  );
};

export default PokemonCard;
