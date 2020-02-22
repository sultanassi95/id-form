import React from "react";
import IDForm from "components/IDForm";
import { initializeAxios } from "configs/axios";

import { AppContainer } from "./styles";

const App: React.FC = () => {
  initializeAxios();

  return (
    <AppContainer>
      <IDForm />
    </AppContainer>
  );
};

export default App;
