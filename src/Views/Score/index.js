// import "./style.css";

//--Material UI components
import { AppBar, Box, Grid, Typography } from "@material-ui/core";
//--Material UI style
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  //offset for fixed AppBar
  offset: theme.mixins.toolbar,
}));

const Score = () => {
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
      <Grid container spacing={0}></Grid>
      <div>I am the Score</div>
    </>
  );
};

export default Score;
