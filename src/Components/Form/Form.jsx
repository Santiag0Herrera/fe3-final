import React, { useState, useEffect } from "react";
import { useContextGlobal } from "../utils/global.context";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

  const [timer, setTimer] = useState(0);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const { state } = useContextGlobal();

  const formStyle = state.theme
    ? { backgroundColor: "rgba(0, 0, 0, 0.345)" }
    : { backgroundColor: "rgba(255, 255, 255, 0.19)" };

  useEffect(() => {
    let progressInterval;
    if (show || error) {
      progressInterval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer < 5) {
            return prevTimer + 1;
          }
          clearInterval(progressInterval);
          return prevTimer;
        });
      }, 1000);
    }
    return () => clearInterval(progressInterval);
  }, [show, error]);


  useEffect(() => {
    if (timer == 5) {
      setError(false);
      setShow(false);
      setTimer(0);
    }
  }, [timer])

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(usuario.email);
  };

  const handleNombreChange = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value.trimStart() });
  };

  const handleEmailChange = (e) => {
    setUsuario({ ...usuario, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.nombre.length >= 5 && validateEmail()) {
      setShow(true);
      setError(false);
      setUsuario({
        nombre: "",
        email: "",
      });
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Resto del formulario... */}
        <h1 className='form-title'>Want to know more?</h1>
        <p>Send us your questions and we will contact you</p>
        <div className="input-container">
          <input
            type="text"
            id="name"
            value={usuario.nombre}
            placeholder="Escriba su nombre"
            onChange={handleNombreChange}
          />
          <input
            id="email"
            type="email"
            value={usuario.email}
            placeholder="Escriba su email"
            onChange={handleEmailChange}
          />
        </div>
        <button className="submit">Enviar</button>
      </form>
      <div className="snackBar" id={show ? "successMessage" : error && "errorMessage"}>
        {show && <h4 style={{color: "rgb(73, 176, 255)"}}>Gracias {usuario.nombre}, te contactaremos cuanto antes vía mail</h4> }
        {error && <h4 style={{color: "rgb(255, 84, 84)"}}>Por favor verifique su información nuevamente</h4>}
        {(show || error) && <progress max={5} value={timer} />}
      </div>
    </>
  );
};

export default Form;
