import React from "react";
import "./App.scss";

import DefAlbergues from "./components/DefPlaces/DefAlbergues/DefAlbergues";
import DefComedores from "./components/DefComedores/DefComedores";
import LoginRouter from "./components/LoginRouter/LoginRouter";

const App = () => {
  return (
    <>
      <LoginRouter />
      <DefAlbergues />
      <DefComedores />
    </>
  );
};

export default App;
