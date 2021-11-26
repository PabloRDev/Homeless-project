import React, { useContext } from "react";
import { UserContext } from "../../../App";

const LogoutUser = () => {
  const { user } = useContext(UserContext);

  window.location.href = "/";
  user && localStorage.clear();

  return <React.Fragment></React.Fragment>;
};

export default LogoutUser;
