// import "./style.css";

//--Material UI components
import { AppBar, Box, Container, Grid, Typography } from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
import { WbIncandescentRounded } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: theme.mixins.toolbar,
}));

const placeholderGames = [
  {
    winner: "winner1",
    looser: "looser1",
    turns: 2,
    winnerScore: 34,
    looserScore: 56,
    date: "somesdate",
  },
];

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
        <Container
        
           display="flex"
         
          justifyContent="space-around"

                   style={{  border: "1px solid black"  }}
        
        >
          {games.map((game) => (
            <div>
              <p>{game.winner}</p>
              <p>{game.looser}</p>
              <p>{game.rounds}</p>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Score;
