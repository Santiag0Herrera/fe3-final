import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favList.map((favoritoLs) => (
          <Card
            key={favoritoLs.id}
            name={favoritoLs.name}
            username={favoritoLs.username}
            id={favoritoLs.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
