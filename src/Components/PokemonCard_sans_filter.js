import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: { minHeight: 178 },

  picture: { width: "130px", height: "130px", margin: "auto" },

  searchContainer: { marginRight: "2vw" },
}));

const PokemonCard = ({ pokemon }) => {
  const makePokemonCard = () => {};
  const classes = useStyles();
  return (
    <>
      {pokemon
        ? pokemon.map((i, index) => (
            <Grid key={index + 1} item xs={12} sm={4} md={3} lg={2} xl={1}>
              <Card square={true}>
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
          ))
        : console.log("sorry")}
    </>
  );
};

export default PokemonCard;
