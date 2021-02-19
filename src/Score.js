//--Material UI components
import { AppBar, Box, Container, Typography, Divider } from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
import ScoreCard from "./Components/ScoreCard"
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: {height: "170px"},
  scoreCard: { marginBottom: "1rem", padding: "1rem" },
  heading: { marginBottom: "2rem" },
  pokeImage: { maxWidth: "200px" },
}));

const Score = () => {
  const [games, setGames] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const baseURL = "https://la-poke-lucha-dev.herokuapp.com/game/all";
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          setGames(response.data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <AppBar position="fixed">
        <Box display="flex" justifyContent="space-between">
          <Typography>choose your fighter</Typography>
          <Typography variant="h1">la poke lucha</Typography>
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
            <>
                {/*<Divider></Divider>*/}
                <ScoreCard game={game}></ScoreCard>
                
            </>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Score;
