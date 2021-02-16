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
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: { minHeight: "178px" },

  container: { width: "80vw", marginLeft: "auto", marginRight: "auto" },

  stageCard: { backgroundColor: "blue" },

  stageCardPic: { width: "30vmax", height: "30vmax" },

  table: { width: "25vw", marginLeft: "auto", marginRight: "auto" },
}));

const Stage = () => {
  const classes = useStyles();
  return (
    <>
      {/* Top Bar */}
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
      {/* Stage */}
      <div>
        <Box
          display="flex"
          justifyContent="space-around"
          className={classes.container}
        >
          <div>
            <Card square={true} className={classes.stageCard}>
              <CardMedia
                className={classes.stageCardPic}
                component="img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              ></CardMedia>
            </Card>
            {/* Stats Table */}
            <TableContainer>
              <Typography variant="h4">Fighter 1</Typography>
              <Table className={classes.table}>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Weight & Height</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Species</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Base Experience</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <Card square={true} style={{ backgroundColor: "red" }}>
              <CardMedia
                style={{ width: "30vmax", height: "30vmax" }}
                component="img"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              ></CardMedia>
            </Card>
            {/* Stats Table */}
            <TableContainer>
              <Typography variant="h4">Fighter 2</Typography>
              <Table className={classes.table}>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Weight & Height</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Species</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Base Experience</TableCell>
                    <TableCell align="center">José Miguel</TableCell>
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
