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
  Logout,
} from "./pages";
import SpeedDialRight from "./components/SpeedDialRight/SpeedDialRight.jsx";
import SpeedDialUp from "./components/SpeedDialUp/SpeedDialUp.jsx";
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
        {window.innerWidth < 768 && <SpeedDialUp />}
        {/* <SpeedDialRight /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/userevent" element={<UserGallery />} />
          <Route path="/appgallery" element={<AppGallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
