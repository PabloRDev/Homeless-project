import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "../../../pages/Home/Home";
import Login from "../../../pages/Login/Login";
import Register from "../../../pages/Register/Register";

export const UserContext = React.createContext(null);

function LoginRouter() {
  const [user, setUser] = useState(null);
  const saveUser = (user) => {
    setUser(user);
  };

  return (
    <div>
      <h1>LOGINROUTER:</h1>
      <Router>
        <UserContext.Provider value={{ user, saveUser }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default LoginRouter;
