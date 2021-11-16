import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";


import DefAlbergues from "./components/DefPlaces/DefAlbergues/DefAlbergues";
import DefComedores from "./components/DefPlaces/DefComedores/DefComedores";
import LoginRouter from "./components/Log/LoginRouter/LoginRouter";

const App = () => {
  return (
    <>
      <Header />
      <LoginRouter />
      <DefAlbergues />
      <DefComedores />
    </>
  );
};

export default App;
