import React from "react";
import Card from "../Components/Card/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContextGlobal();
  
  return (
    <>
      <h1>Home</h1>
      <div className="card-grid">
        {state.homeList.map((dentista) => (
            <Card
              key={dentista.id}
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
            />
        ))}
      </div>
    </>
  );
};

export default Home;
