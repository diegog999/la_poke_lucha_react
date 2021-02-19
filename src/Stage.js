// import "./style.css";

//--Material UI components
import {
  AppBar,
  Box,
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
  stageCard1: {
    // backgroundColor: "blue",
    marginBottom: "3vmax",
    border: "solid 5px green",
  },

  stageCard2: {
    backgroundColor: "red",
    marginBottom: "3vmax",
    border: "solid 5px red",
  },
  stageCardPic: {
    width: "30vmax",
    height: "30vmax",
  },
  tableContainer: {
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

  console.log(luchador1, luchador2);

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

          <Box className={classes.results}>
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
          </Box>

          <Typography variant="h4" style={{ fontFamily: "'Bangers', cursive" }}>
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
            <Card square={true} className={classes.stageCard1}>
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
                      
                      {luchador1.type.map((type) => type.name +" ")}
                    
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
                    <TableCell align="center">{luchador1.base.Speed}</TableCell>
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
            <Card square={true} className={classes.stageCard2}>
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
                      
                      {luchador1.type.map((type) => type.name +" ")}
                    
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
                    <TableCell align="center">{luchador2.base.Speed}</TableCell>
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
};

export default Stage;
