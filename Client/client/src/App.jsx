import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AppGallery from "./pages/AppGallery/AppGallery";
import UserGallery from "./pages/UserGallery/UserGallery";
import Ayuda from "./pages/Ayuda/Ayuda";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <AppGallery />
      <UserGallery />
      <Ayuda />
    </div>
  );
};

export default App;
