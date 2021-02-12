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

  table: { width: "50vw", marginLeft: "auto", marginRight: "auto" },
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
          <Card className={classes.stageCard}>
            <CardMedia
              style={{ width: "30vmax", height: "30vmax" }}
              component="img"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            ></CardMedia>
            <CardContent>fighter #1</CardContent>
          </Card>

          <Card style={{ backgroundColor: "red" }}>
            <CardMedia
              style={{ width: "30vmax", height: "30vmax" }}
              component="img"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            ></CardMedia>
            <CardContent>fighter #2</CardContent>
          </Card>
        </Box>
        {/* Stats Table */}
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Fighter 1</TableCell>
                <TableCell align="center">Fighter 2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Baldussur</TableCell>
                <TableCell align="center">José Miguel</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography>
          types, stats, species, weight & height, base_experience
        </Typography>
      </div>
    </>
  );
};

export default Stage;
