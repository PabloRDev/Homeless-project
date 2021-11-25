import React from "react";

const LogoutUser = () => {
  window.location.href = "/";
  localStorage.clear();

  return <React.Fragment></React.Fragment>;
};

export default LogoutUser;
