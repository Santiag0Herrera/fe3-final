import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useContextGlobal } from "../utils/global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state } = useContextGlobal();
  const [current, setCurrent] = useState(window.location.pathname);

  return (
    <nav style={{backgroundColor: state.theme ? "rgba(0, 0, 0, 0.346)" : "rgb(255 255 255 / 19%)"}}>
      <div className="navDetails">
        <Link 
          to="/"
          onClick={()=> setCurrent('/')}
          style={{borderColor: current == '/' && "rgb(255, 84, 84)"}}
        >
          HOME
        </Link>
        <Link
          to="/favs"
          onClick={()=> setCurrent('/favs')}
          style={{borderColor: current == '/favs' && "rgb(255, 84, 84)"}}
        >
          <span id="fav">FAVORITOS</span><span>{state.favList.length}</span></Link>
        <Link 
          to="/contacto"
          onClick={()=> setCurrent('/contacto')}
          style={{borderColor: current == '/contacto' && "rgb(255, 84, 84)"}}
        >
          CONTACTO
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
