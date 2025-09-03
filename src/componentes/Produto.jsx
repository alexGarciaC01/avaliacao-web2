import React from "react";
import "./Produto.css";

const Produto = ({ nome, preco, condicao, imagem }) => {
  return (
    <div className="produto">
      <img src={imagem} alt={nome} className="imagem-marca" />
      <h4>{nome}</h4>
      <p>R$ {preco}</p>
      <p>{condicao}</p>
    </div>
  );
};

export default Produto;
