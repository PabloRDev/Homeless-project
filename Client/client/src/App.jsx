import React, { useState } from "react";

import "./App.scss";

import {
  About,
  AppGallery,
  Ayuda,
  Home,
  Login,
  Register,
  UserGallery,
} from "./pages";
import SpeedDial from "./components/SpeedDial/SpeedDial.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export const UserContext = React.createContext(null);

const App = () => {
  const [user, setUser] = useState(null);
  const saveUser = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <UserContext.Provider value={{ user, saveUser }}>
        <SpeedDial />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/userevent" element={<UserGallery />} />
          <Route path="/appgallery" element={<AppGallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
