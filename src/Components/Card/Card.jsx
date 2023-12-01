import React from "react";
import "./Card.css";
import { useContextGlobal } from "../utils/global.context";
import { useNavigate } from "react-router";

const Card = ({ name, username, id }) => {
const {state, dispatch}= useContextGlobal()
const navigate= useNavigate()

  const addFav = () => {
    const favInfo = { id, name, username };
    dispatch({type: 'ADD_FAVLIST', payload: favInfo})
  };

  const handleRemove=()=>{
    const favInfo = { id, name, username };
    dispatch({type: 'REMOVE_FAVLIST', payload: favInfo})
  }

  return (
    <div className="card">
      <img src="./img/doctor.jpg" alt="doctor image"/>
      <div onClick={()=>navigate(`/dentista/${id}`)} className="card-details">
        <h2 className="text-title">{`${id} - ${name}`}</h2>
        <p className="text-body">{username}</p>
      </div>
      <button 
        onClick={state.favList.find((item)=>item.id===id) ? handleRemove : addFav} 
        className={`card-button ${state.favList.find((item)=>item.id===id) ? "isFavButton" : "isNotFavButton" }`} >
        {state.favList.find((item)=>item.id===id) ? 'Remove Fav' : 'Add Fav'}
      </button>
    </div>
  );
};

export default Card;
