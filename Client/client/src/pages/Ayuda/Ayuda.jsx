import React from "react";
import "./Ayuda.scss";

const Ayuda = () => {
  return (
    <div className="enlaces">
        <h2>RECURSOS PARA PERSONAS SIN HOGAR</h2>
      <ul>
        <li>
          <a href="https://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Samur-Social-Personas-sin-hogar/Personas-sin-hogar/Programa-de-atencion/Programa-de-atencion/?vgnextfmt=default&vgnextoid=c83f70c0b6a6b310VgnVCM1000000b205a0aRCRD&vgnextchannel=bd9d9b6bf78b8310VgnVCM2000000c205a0aRCRD">
            Programa de atención
          </a>
        </li>
        <li>
          <a href="https://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Samur-Social-Personas-sin-hogar/Samur-Social/?vgnextfmt=default&vgnextchannel=ddf8f471d18b8310VgnVCM2000000c205a0aRCRD">
            Samur social
          </a>
        </li>
        <li>
          <a href="https://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Samur-Social-Personas-sin-hogar/Personas-sin-hogar/Campana-contra-el-frio/Campana-municipal-contra-el-frio-2021-2022/?vgnextfmt=default&vgnextoid=c2bedbb5cf70c710VgnVCM2000001f4a900aRCRD&vgnextchannel=e8619b6bf78b8310VgnVCM2000000c205a0aRCRD">
            Campaña contra el frio 2021-2022
          </a>
        </li>
      </ul>
      <h2>Aquí tiene tu guía para ser un perfecto sin techo</h2>
      <a href="./pdf.pdf" download>
        Descargar PDF
      </a>
      <h2>Y de regalo el starter pack del verdadero homeless</h2>
      <img src="./homeless.jpg" alt="" />
    </div>
  );
};

export default Ayuda;
