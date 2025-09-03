import React from "react";
import "./CampoTexto.css";

const CampoTexto = ({ label = "", valor = "", placeholder = "", aoAlterado = () => {} }) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoTexto;
