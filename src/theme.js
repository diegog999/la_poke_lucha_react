import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h3: {
      fontFamily: "'Bangers', cursive",
    },

    h4: {
      fontFamily: "'Press Start 2P', cursive",
      marginBottom: "100px",
    },

    h5: {
      fontSize: "2rem",
      letterSpacing: "2rem",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
    },

    h6: {
      textAlign: "right",
      color: "violet",
      fontSize: "1.5rem",
    },

    body1: {
      fontSize: "1.2rem",
    },
  },

  overrides: {
    MuiInputBase: {
      root: {
        color: "white",
      },
      //   input: { backgroundColor: "red" },
    },
    MuiFormLabel: {
      root: { color: "white" },
    },
    MuiInput: {
      underline: { "&:before": { borderBottom: "solid 1px white" } },
    },

    MuiLinearProgress: {
      root: {
        height: "14px",
        marginTop: "0.5rem",
      },
    },
  },
});

export default theme;
