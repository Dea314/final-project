import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#607d8b",
      light: "#b0bec5",
      dark: "#455a64",
    },
    secondary: {
      main: "#fff59d",
      light: "#ffffcf",
      dark: "#cbc26d",
    },
  },
  typography: {
    fontFamily: "Exo",
    fontSize: 20,
  },
});

export default Theme;
