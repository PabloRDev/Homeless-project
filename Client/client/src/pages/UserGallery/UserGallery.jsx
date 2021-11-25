import React from "react";
import InsertForm from "../../components/InsertFormAPI/InsertFormAPI";
import InsertFormView from "../../components/InsertFormView/InsertFormView";


const UserGallery = () => {
  return (
    <div>
      <div className="form">
        <InsertForm />
        <InsertFormView />
      </div>
    </div>
  );
};

export default UserGallery;
