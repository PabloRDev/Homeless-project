import React from "react";
import "./About.scss";
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <div className="container">
      <h1 className="title">NOMBRE DEL PROYECTO</h1>
      <h2 className="subtitle">Este proyecto nace con idea de ayudar a la gente sin hogar de Madrid.</h2>
      <h2 className="subtitle">Aquí puedes encontrar mucha información de donde acudir para lo que necesites.</h2>
      <h2 className="subtitle">Somos un grupo de estudiantes de programación los que hemos dado forma a NOMBRE DEL PROYECTO como proyecto final del bootcamp Full Stack.</h2>
      <div className="gitcontainer"><GitHubIcon/> <GitHubIcon/> <GitHubIcon/> <GitHubIcon/></div>
    </div>
  );
};

export default About;
