import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";

const PokemonCard = ({ pokemon }) => {
  return (
    <>
      {pokemon
        ? pokemon.map((i, index) => (
            <Grid item xs={12} sm={4} md={3} lg={2}>
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
    </>
  );
};

export default PokemonCard;
