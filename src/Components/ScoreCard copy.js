//--Material UI components
import {
  Box,
  CardContent,
  CardMedia,
  Card,
  Typography,
} from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  scoreCard: { marginBottom: "1rem", padding: "1rem" },
  pokeImage: { maxWidth: "200px" },
}));

const ScoreCard = ({ game }) => {
  const classes = useStyles();
  return (
    <Card square={true} className={classes.scoreCard}>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Typography variant="h3">{game.winnerScore}</Typography>
        <Card square={true}>
          <CardMedia
            className={classes.pokeImage}
            component="img"
            src={game.winner.image}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6">{game.winner.name.english}</Typography>
          </CardContent>
        </Card>
        <Typography variant="h3">VS</Typography>
        <Card square={true} className={classes.pokemonCard}>
          <CardMedia
            className={classes.pokeImage}
            component="img"
            src={game.looser.image}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6">{game.looser.name.english}</Typography>
          </CardContent>
        </Card>
        <Typography variant="h3">{game.looserScore}</Typography>
      </Box>
    </Card>
  );
};
export default ScoreCard;
