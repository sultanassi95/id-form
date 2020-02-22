import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { ThemeProvider } from "emotion-theming";

import theme from "configs/theme";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

// I made the app as simple as it requires to run the requested test. BUILDING THE ID FORM
// Router usage isn't necessary in the case.
// I've implemented my preferred CSS-in-js system to make it closer to the React-Native way.

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
