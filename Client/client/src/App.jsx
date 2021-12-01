import React, { useState } from "react";

import "./styles/reset.scss";
import "./styles/App.scss";

import {
  About,
  AppGallery,
  Ayuda,
  Home,
  Login,
  Register,
  UserGallery,
  Logout,
} from "./pages";
import SpeedDialRight from "./components/SpeedDialRight/SpeedDialRight.jsx";
import SpeedDialDown from "./components/SpeedDialDown/SpeedDialDown.jsx";
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
        {window.innerWidth >= 768 && <SpeedDialRight />}
        {window.innerWidth < 768 && <SpeedDialDown />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/eventos" element={<UserGallery />} />
          <Route path="/donde-acudir" element={<AppGallery />} />
          <Route path="/acceso" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
