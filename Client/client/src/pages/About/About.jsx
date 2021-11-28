import React from "react";
import "./About.scss";
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <div className="container">
      <h1 className="title">#NoMásCalle</h1>
      <h2 className="subtitle">El proyecto #NoMásCalle nace con la idea de ayudar a las personas más necesitadas, personas sin hogar, con una vivienda insegura, inadecuada o en riesgo de exclusión social. Somos un grupo de estudiantes de programación que hemos querido poner al servicio de los más desfavorecidos lo aprendido durante el curso. De esta manera hemos creado el sitio web #NoMásCalle, donde acercaremos a esta parte de la sociedad, a veces olvidada, todos los servicios y recursos que ofrece la ciudad de Madrid. Además, te invitamos a colaborar activamente compartiendo todo aquello que pueda sumar.
Esperamos que todo aquel que pase por aquí, encuentre aquello que busca y pueda mejorar su calidad de vida o la de los que le rodean. 
</h2>
      <div className="gitcontainer"><GitHubIcon/> <GitHubIcon/> <GitHubIcon/> <GitHubIcon/></div>
    <div>
      <h2></h2>
    </div>
    </div>
  );
};

export default About;
