import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AppGallery from "./pages/AppGallery/AppGallery";
import UserGallery from "./pages/UserGallery/UserGallery";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <AppGallery />
      <UserGallery />
    </div>
  );
};

export default App;
