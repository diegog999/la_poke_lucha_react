// import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { sleep, getDamage } from "./util";
//--Material UI components
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  LinearProgress,
} from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  appbar: {
    padding: "1rem",
    height: "200px",
    backgroundColor: "black",
  },

  //offset for fixed AppBar
  offset: { minHeight: "280px" },

  container: {
    width: "80vw",
    marginLeft: "auto",
    marginRight: "auto",
  },
  results: {
    display: "flex",
    width: "300px",
    justifyContent: "space-between",
  },
  winner: {
    // backgroundColor: "blue",
    border: "solid 5px green",
  },

  looser: {
    backgroundColor: "red",
    border: "solid 5px red",
  },
  stageCardPic: {
    width: "30vmax",
    height: "30vmax",
  },
  tableContainer: {
    marginTop: "3vmax",
    textAlign: "center",
  },

  table: {
    width: "25v",
    marginTop: "3vmax",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Stage = ({ luchador1, luchador2 }) => {
  const classes = useStyles();

  const [fightState, setFightState] = useState({
    health1: luchador1.base.HP,
    health2: luchador2.base.HP,
    turns: 0,
  });
  const [winner, setWinner] = useState("");

  const calculateHpPoints = () => {
    if (fightState.turns % 2 === 0) {
      // value hp luchador2
      //- getDamage()
      setFightState({
        health1: fightState.health1,
        health2: fightState.health2 - getDamage(luchador1, luchador2),
        turns: fightState.turns + 1,
      });
    } else {
      setFightState({
        health1: fightState.health1 - getDamage(luchador2, luchador1),
        health2: fightState.health2,
        turns: fightState.turns + 1,
      });
    }
  };

  useEffect(() => {
    const fight = async () => {
      try {
        await sleep(3000);
        calculateHpPoints();
        console.log(fightState);
      } catch (error) {
        console.log(error);
      }
    };
    if (fightState.health1 > 0 && fightState.health2 > 0) {
      fight();
    } else {
      let winner;
      let looser;
      let winnerScore;
      let looserScore;
      if(fightState.health1 <= 0 ) {
        winner = luchador2;
        looser = luchador1;
        winnerScore = 100 + fightState.health2;
        looserScore = luchador2.base.HP - fightState.health2;
      } else {
        winner = luchador1;
        looser = luchador2;
        winnerScore = 100 + fightState.health1;
        looserScore = luchador1.base.HP - fightState.health1;
      }
      setWinner(winner.name);
      axios
      .post(
        "https://la-poke-lucha-dev.herokuapp.com/game/insertgame",
        {
          winner : winner._id, 
          looser : looser._id, 
          turns : fightState.turns , 
          winnerScore : winnerScore, 
          looserScore : looserScore
        }
        
      )
      .then((response) => console.log(response))
      .catch((e) => console.error(e))
    }
  }, [fightState]);

  const normalise = (hp, maxHp) => {
    console.log("");
    return hp < 0 ? 0 : (hp * 100) / maxHp;
  };

  if (luchador1 && luchador2) {
    return (
      <>
        {/* Top Bar */}
        <AppBar position="fixed" className={classes.appbar}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h4"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              <Link to="/">
                choose <br></br>your fighter
              </Link>
            </Typography>
            <Box>
              <Box className={classes.results}>
                <Typography variant="h4">Score</Typography>
                <Box>
                  <Typography>Fighter 1</Typography>
                  <Typography>{luchador1.name}</Typography>
                  <Typography>
                    {fightState.health1 < 0 ? 0 : fightState.health1}/
                    {luchador1.base.HP}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={normalise(fightState.health1, luchador1.base.HP)}
                  />
                </Box>
                <Box>
                  <Typography>Fighter 2</Typography>
                  <Typography>{luchador2.name}</Typography>
                  <Typography>
                    {fightState.health2 < 0 ? 0 : fightState.health2}/
                    {luchador2.base.HP}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={normalise(fightState.health2, luchador2.base.HP)}
                  />
                </Box>
              </Box>
              <Box>
                {fightState.health1 <= 0 ? `${luchador2.name} won!` : null}
                {fightState.health2 <= 0 ? `${luchador1.name} won!` : null}
              </Box>
            </Box>
            <Typography
              variant="h4"
              style={{ fontFamily: "'Bangers', cursive" }}
            >
              la poke lucha
            </Typography>
          </Box>
        </AppBar>
        <div className={classes.offset} />
        {/* Stage */}
        <div>
          <Box
            display="flex"
            justifyContent="space-around"
            className={classes.container}
          >
            {/* FIGHTER 1 */}
            <div>
              <Card
                square={true}
                className={
                  !winner
                    ? null
                    : winner === luchador1.name
                    ? classes.winner
                    : classes.looser
                }
              >
                <CardMedia
                  className={classes.stageCardPic}
                  component="img"
                  src={luchador1.image}
                ></CardMedia>
              </Card>
              {/* Stats Table */}
              <TableContainer className={classes.tableContainer}>
                <Typography variant="h4">{luchador1.name}</Typography>
                <Table className={classes.table}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">Luchador</TableCell>
                      <TableCell align="center">1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Type</TableCell>
                      <TableCell align="center">
                        {luchador1.type.map((type) => type.name + " ")}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Weight</TableCell>
                      <TableCell align="center">{luchador1.weight}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Hit Points</TableCell>
                      <TableCell align="center">{luchador1.base.HP}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Attack</TableCell>
                      <TableCell align="center">
                        {luchador1.base.Attack}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Defense</TableCell>
                      <TableCell align="center">
                        {luchador1.base.Defense}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Speed</TableCell>
                      <TableCell align="center">
                        {luchador1.base.Speed}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Special Attack</TableCell>
                      <TableCell align="center">
                        {luchador1.base.Special_Attack}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Special Attack</TableCell>
                      <TableCell align="center">
                        {luchador1.base.Special_Attack}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Special Defense</TableCell>
                      <TableCell align="center">
                        {luchador1.base.Special_Defense}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            {/* FIGHTER 2 */}
            <div>
              <Card
                square={true}
                className={
                  !winner
                    ? null
                    : winner === luchador2.name
                    ? classes.winner
                    : classes.looser
                }
              >
                <CardMedia
                  className={classes.stageCardPic}
                  component="img"
                  src={luchador2.image}
                ></CardMedia>
              </Card>
              {/* Stats Table */}
              <TableContainer className={classes.tableContainer}>
                <Typography variant="h4">{luchador2.name}</Typography>
                <Table className={classes.table}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">Luchador</TableCell>
                      <TableCell align="center">2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Type</TableCell>
                      <TableCell align="center">
                        {luchador1
                          ? luchador1.type.map((type) => type.name + "/ ")
                          : null}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Weight</TableCell>
                      <TableCell align="center">{luchador2.weight}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Hit Points</TableCell>
                      <TableCell align="center">{luchador2.base.HP}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Attack</TableCell>
                      <TableCell align="center">
                        {luchador2.base.Attack}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Defense</TableCell>
                      <TableCell align="center">
                        {luchador2.base.Defense}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Speed</TableCell>
                      <TableCell align="center">
                        {luchador2.base.Speed}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Special Attack</TableCell>
                      <TableCell align="center">
                        {luchador2.base.Special_Attack}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Special Attack</TableCell>
                      <TableCell align="center">
                        {luchador2.base.Special_Attack}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Special Defense</TableCell>
                      <TableCell align="center">
                        {luchador2.base.Special_Defense}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
        </div>
      </>
    );
  }
};

export default Stage;
