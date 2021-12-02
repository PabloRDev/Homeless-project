import React from "react";
import "../Home/Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="homeWrapper">
        <section className="welcome">
          <img className="image-logo" src="./logonegro.png" alt="Imagen Logo" />
          <h2>Ideas que ayudan a personas</h2>
          <div className="image-cropper">
            <img className="image-circle" src="./Home.jpg" alt="homelogo" />
          </div>{" "}
          <Link to="/donde-acudir">
            <button style={{ cursor: "pointer" }}>¿Dondé puedo acudir?</button>
          </Link>
          <h2 className="subtitle">
            El proyecto <span className="branding">#NoMásCalle</span> nace con
            la idea de ayudar a las personas sin hogar, con una vivienda
            insegura, inadecuada o en riesgo de exclusión social a no acabar en
            la calle y sufrir toda la problemática que ello conlleva,
            acercándoles todas las medidas y eventos que Madrid, sus
            insituciones y ciudadanos ponen a su disposición. Se calcula que
            diariamente duermen en las calles de Madrid un millar de personas,
            este proyecto es por ustedes.
          </h2>
        </section>
        <div className="imageStatistic">
          <h2>VIVIR SIN HOGAR NO ES SÓLO VIVIR EN LA CALLE</h2>
          <p>
            Según los datos ofrecidos por el Ayuntamiento de Madrid del año
            2020, ésta es la situación de las Personas Sin Hogar.
          </p>
          <div className="statisticWrapper">
            <div className="statistic">
              <div className="statisticImageWraper">
                <img src="./hom1.png" alt="" />
              </div>
              <h3>8 de cada 10 PSH son hombres</h3>
            </div>
            <div className="statistic">
              <div className="statisticImageWraper">
                <img src="./hom2.png" alt="" />
              </div>
              <h3>La media de edad es de 47 años</h3>
            </div>
            <div className="statistic">
              <div className="statisticImageWraper">
                <img src="./hom3.png" alt="" />
              </div>
              <h3>El 43% es de nacionalidad española</h3>
            </div>
            <div className="statistic">
              <div className="statisticImageWraper">
                <img src="./hom4.png" alt="" />
              </div>
              <h3>El 23,44% duerme en la calle</h3>
            </div>
            <div className="statistic">
              <div className="statisticImageWraper">
                <img src="./hom5.png" alt="" />
              </div>
              <h3>El 33% lleva más de 5 años sin hogar</h3>
            </div>
            <div className="statistic">
              <div className="statisticImageWraper">
                <img src="./hom6.png" alt="" />
              </div>
              <h3>El 80% está en el paro</h3>
            </div>
            <div className="statistic">
              <div className="statisticImageWraper">
                <img src="./hom7.png" alt="" />
              </div>
              <h3>El 79% no llega a los 400€ al mes</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
