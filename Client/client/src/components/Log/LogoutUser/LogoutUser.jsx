import React, { useContext } from "react";
import { UserContext } from "../../../App";

const LogoutUser = () => {
  const { user } = useContext(UserContext);

  if (user) {
    window.location.href = "/";
    localStorage.clear();
  } else {
    window.location.href = "/acceso";
  }

  return <React.Fragment></React.Fragment>;
};

export default LogoutUser;
