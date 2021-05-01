import { blue } from "@material-ui/core/colors";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: { primary: blue, secondary: blue },
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
}));

export { theme, useStyle };
