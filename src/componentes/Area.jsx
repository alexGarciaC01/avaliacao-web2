import React from "react";
import "./Area.css";
import Produto from "./Produto";

const Area = ({ nome, corPrimaria, corSecundaria, produtos }) => {
  if (produtos.length === 0) return null;

  return (
    <section className="area" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="produtos">
        {produtos.map((produto, index) => (
          <Produto key={index} {...produto} />
        ))}
      </div>
    </section>
  );
};

export default Area;
