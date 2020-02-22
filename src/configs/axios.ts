// Comment are to describe usage case in a Real world app.

import axios from "axios";

export const apiConfigs = {
  baseUrl: "https://restcountries.eu/rest/v2" // Would be the main URL for our back-end.
};

export const initializeAxios = () => {
  // It can take a token
  axios.defaults.baseURL = apiConfigs.baseUrl;
};
