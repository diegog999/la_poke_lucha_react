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
import { Height, SportsRugbySharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  scoreCard: { padding: "2rem", marginBottom: "2rem", marginTop: "2rem" },
  pokemonCard: {
    border: "none",
    boxShadow: "none",
    position: 'relative',
  },
  pokeImage: { 
    maxWidth: "200px" 
  },
  looser: {
    position: "absolute",
    top:"0",
    left:"0",
    width:"100%",
    height: "100%",
    backgroundImage: "url(./cross_out.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const ScoreCard = ({ game }) => {
  const classes = useStyles();
  return (
      /*<Box display="flex" justifyContent="space-around" alignItems="center" className={classes.scoreCard}>
        <Typography variant="h3">{game.winnerScore}</Typography>
        <Card square={true} className={classes.pokemonCard}>
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
      </Box>*/
      <Card square={true} className={classes.scoreCard}>
       <Box display="flex" justifyContent="space-around" alignItems="center">
        <Typography variant="h3">{game.winnerScore}</Typography>
        <Card square={true} className={classes.pokemonCard}>
          <CardMedia
            className={classes.pokeImage}
            component="img"
            src={game.winner.image}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6">{game.winner.name.english}</Typography>
          </CardContent>
        </Card>
        <Typography variant="h6">VS</Typography>
        <Card square={true} className={classes.pokemonCard}>
          <CardMedia
            className={classes.pokeImage}
            component="img"
            src={game.looser.image}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6">{game.looser.name.english}</Typography>
          </CardContent>
          <div className={classes.looser}></div>
        </Card>
        <Typography variant="h3">{game.looserScore}</Typography>
      </Box>
      </Card>
  );
};
export default ScoreCard;
