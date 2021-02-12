import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";

const PokemonCard = ({ pokemon }) => {
  return (
    <>
      {pokemon
        ? pokemon.map((i, index) => (
            <Grid key={index} item xs={12} sm={4} md={3} lg={2} xl={1}>
              <Card>
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
    </>
  );
};

export default PokemonCard;
