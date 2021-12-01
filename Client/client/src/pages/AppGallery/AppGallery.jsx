import React from "react";
import { useState } from "react";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";

import "./AppGallery.scss";

import DefAlbergues from "../../components/DefPlaces/DefAlbergues/DefAlbergues";
import DefComedores from "../../components/DefPlaces/DefComedores/DefComedores";

const AppGallery = () => {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <>
      <div className="buttonContainer">
        <button
          className="custom-btn btn-4"
          onClick={() => setShowSearch(true)}
        >
          <BedroomChildIcon sx={{ fontSize: 50, mt: 1.5 }} />
        </button>

        <button
          className="custom-btn btn-5"
          onClick={() => setShowSearch(false)}
        >
          <FoodBankIcon sx={{ fontSize: 50, mt: 1.5 }} />
        </button>
      </div>

      <div>{showSearch ? <DefAlbergues /> : <DefComedores />}</div>
    </>
  );
};

export default AppGallery;
