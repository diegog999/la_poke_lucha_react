//--Material UI components
import { AppBar, Box, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import { useState, useEffect } from "react";

import ScoreCard from "./Components/ScoreCard";

const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: { height: "150px" },
  scoreCard: { marginBottom: "1rem", padding: "1rem" },
  heading: { marginBottom: "2rem" },
  pokeImage: { maxWidth: "200px" },
  list: { textAlign: "center" },
  appbar: {
    padding: "1rem",
    height: "150px",
    backgroundColor: "black",
  },
  noDecoration: {
    textDecoration: "none",
    color: "inherit",
  },
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
      {/* Top Bar */}
      <AppBar position="fixed" className={classes.appbar}>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h4"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            <Link to="/" className={classes.noDecoration}>
              choose <br></br>your fighter
            </Link>
          </Typography>

          {/*<Box className={classes.results}>
            <Typography variant="h4">Score</Typography>
            <Box>
              <Typography>Winner</Typography>
              <Typography>{luchador1.name}</Typography>
              <Typography>280</Typography>
            </Box>
            <Box>
              <Typography>Loser</Typography>
              <Typography>{luchador2.name}</Typography>
              <Typography>70</Typography>
            </Box>
  </Box>*/}

          <Typography variant="h4" style={{ fontFamily: "'Bangers', cursive" }}>
            la poke lucha
          </Typography>
        </Box>
      </AppBar>

      <div className={classes.offset} />
      <div>
        <Container maxWidth="md" className={classes.list}>
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
