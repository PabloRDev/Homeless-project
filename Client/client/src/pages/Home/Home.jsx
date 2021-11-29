import React from "react";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div>
      <div className="tittle">
        <h1 className="bienvenido">#NoMásCalle</h1>
        <div>
          <img
            src="https://media.discordapp.net/attachments/906549565740679268/914895933718806609/1.png?width=1520&height=772"
            alt="homelogo"
          />
        </div>
        <h2 className="subtitulo">
        El proyecto #NoMásCalle nace con la idea de ayudar a las personas sin
          hogar, con una vivienda insegura, inadecuada o en riesgo de exclusión
          social a no acabar en la calle y sufrir toda la problemática que ello
          conlleva, acercándoles todas las medidas y eventos que Madrid, sus
          insituciones y ciudadanos ponen a su disposición. Se calcula que
          diariamente duermen en las calles de Madrid un millar de personas,
          este proyecto es por ustedes.
        </h2>
      </div>

      <div>
        <iframe
          width="859"
          height="483"
          src="https://www.youtube.com/embed/kbEhdfv_Qjo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
