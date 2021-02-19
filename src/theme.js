import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: '"Montserrat", Open Sans',
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
  },
});

export default theme;
