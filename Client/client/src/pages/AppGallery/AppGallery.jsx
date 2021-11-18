import React from 'react'
import { useState } from 'react'
import "./AppGallery.scss"
import DefAlbergues from "../../components/DefPlaces/DefAlbergues/DefAlbergues"
import DefComedores from "../../components/DefPlaces/DefComedores/DefComedores"

const AppGallery = () => {
    const [showSearch, setShowSearch] =
  useState(true);
    return (
        <div>




<div className="buttonContainer">

<button
              className="custom-btn btn-4"
              onClick={() => setShowSearch(true)}
            >

🏡 ALBERGUES

        </button>

        <button
              className="custom-btn btn-4"
              onClick={() => setShowSearch(false)}
            >
        
        🍜 COMEDORES

        </button>

        </div>

        <div>
        {showSearch ? (
          <DefAlbergues />
        ) : (
          <DefComedores />
        )}
      </div>


      
      
    </div>
    );
}

export default AppGallery