import React from "react";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div>
      <div>
        <img
          src="https://media.discordapp.net/attachments/906549565740679268/914895933718806609/1.png?width=1520&height=772"
          alt="homelogo"
        />
      </div>
      <h2 className="subtitle">
        El proyecto #NoMásCalle nace con la idea de ayudar a las personas sin
        hogar, con una vivienda insegura, inadecuada o en riesgo de exclusión
        social a no acabar en la calle y sufrir toda la problemática que ello
        conlleva, acercándoles todas las medidas y eventos que Madrid, sus
        insituciones y ciudadanos ponen a su disposición. Se calcula que
        diariamente duermen en las calles de Madrid un millar de personas, este
        proyecto es por ustedes.
      </h2>

      <div className="imageStatistic">
        <h2>VIVIR SIN HOGAR NO ES SÓLO VIVIR EN LA CALLE</h2>
        <ul>
          <li>· SIN TECHO</li>
          <li>· SIN VIVIENDA</li>
          <li>· VIVIENDA INSEGURA</li>
          <li>· VIVIENDA INADECUADA</li>
        </ul>
        <div className="statisticWrapper">
          <div className="statistic">
            <div className="statisticImageWraper">
              <img src="./hom1.png" alt="" />
            </div>
            <h3>9 de cada 10 PSH son hombre</h3>
          </div>
          <div className="statistic">
            <div className="statisticImageWraper">
              <img src="./hom2.png" alt="" />
            </div>
            <h3>La media de edad es de 44 años</h3>
          </div>
          <div className="statistic">
            <div className="statisticImageWraper">
              <img src="./hom3.png" alt="" />
            </div>
            <h3>El 52% es de nacionalidad española</h3>
          </div>
          <div className="statistic">
            <div className="statisticImageWraper">
              <img src="./hom4.png" alt="" />
            </div>
            <h3>El 23% duerme en la calle</h3>
          </div>
          <div className="statistic">
            <div className="statisticImageWraper">
              <img src="./hom5.png" alt="" />
            </div>
            <h3>El 28% lleva más de 5 años sin hogar</h3>
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
            <h3>El 71% no llega a los 400€ al mes</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
