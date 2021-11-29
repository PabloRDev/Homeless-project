import React from "react";
import "./About.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <div className="container">
      <h1 className="title">#NoMásCalle</h1>
      <h2 className="subtitle">
        El proyecto #NoMásCalle nace con la idea de ayudar a las personas sin
        hogar, con una vivienda insegura, inadecuada o en riesgo de exclusión
        social a no acabar en la calle y sufrir toda la problemática que ello
        conlleva, acercándoles todas las medidas y eventos que Madrid, sus
        insituciones y ciudadanos ponen a su disposición. Se calcula que
        diariamente duermen en las calles de Madrid un millar de personas, este
        proyecto es por ustedes.
      </h2>
      <h2 className="subtitle">
        Desde albergues, comedores, centros religiosos, ONG o eventos
        organizados, en #NoMásCalle ponemos a disposición de los usuarios todo
        tipo de información disponible. A su vez dispone de la funcionalidad de
        añadir eventos que se quieran promocionar por parte de particulares,
        asociaciones, ONG o quien más considere para apoyar a estas personas en
        esta situación a vivir con dignidad y con el apoyo necesario para salir
        de esa situación.
      </h2>
      <h2 className="subtitle">
        Hemos querido poner nuestro conocimiento en programación web a
        disposición de todos los interesados antes mencionados. Con #NoMásCalle
        acercamos a esta parte de la sociedad, a veces olvidada, todos los
        servicios y recursos que ofrece la ciudad de Madrid.
      </h2>
      <h2 className="subtitle">
        Te invitamos a colaborar activamente compartiendo todo aquello que pueda
        sumar, ya sea contactando directamente con nosotros a través de los
        medios de comunicación que abajo aparecen para añadir funcionalidades o
        invitándonos a eventos que puedan interesar.
      </h2>
      <h2 className="subtitle">
        Esperamos que todo aquel que pase por aquí, encuentre aquello que busca
        y pueda mejorar su calidad de vida o la de alguien más. Nuestro objetivo
        es claro, ayudar a que haya #NoMásCalle.
      </h2>
      <div className="gitcontainer">
        <GitHubIcon /> <GitHubIcon /> <GitHubIcon /> <GitHubIcon />
      </div>
      <div></div>
    </div>
  );
};

export default About;
