//--Material UI components
import {
  AppBar,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
import ScoreCard from "./Components/ScoreCard"

const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: theme.mixins.toolbar,
  scoreCard: { marginBottom: "1rem", padding: "1rem" },
  heading: { marginBottom: "2rem" },
  pokeImage: { maxWidth: "200px" },
}));

const Score = ({ games }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Box display="flex" justifyContent="space-between">
          <Typography>choose your fighter</Typography>
          <Typography>la poke lucha</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Typography>fight scores</Typography>
        </Box>
      </AppBar>

      <div className={classes.offset} />
      <div>
        <Container maxWidth="md">
          <Typography variant="h2" className={classes.heading}>
            Scores
          </Typography>
          {games.map((game) => (
            <ScoreCard game={game}></ScoreCard>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Score;
