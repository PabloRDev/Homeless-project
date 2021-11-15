import React from "react";
import "./App.scss";

import DefAlbergues from "./components/DefAlbergues/DefAlbergues";
import DefComedores from "./components/DefComedores/DefComedores";
import LoginMaster from "./components/LoginMaster/LoginMaster";

const App = () => {
  return (
    <>
      <DefAlbergues />
      <DefComedores />
      <LoginMaster />
    </>
  );
};

export default App;
