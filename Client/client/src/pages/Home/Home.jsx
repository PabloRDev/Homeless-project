import React from "react";
import "../Home/Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="bienvenido">¡Bienvenido a infoHogar!</h1>
        <div>
          <img
            src="https://www.casanc.org/wp-content/uploads/home3.png"
            alt="homelogo"
          />
        </div>
        <h2 className="subtitulo">
          Encuentra un lugar para refugiarte bla bla bla
        </h2>
      </div>

      <div>
        <iframe
          width="900"
          height="505"
          src="https://www.youtube.com/embed/WOT5R1Inul0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
