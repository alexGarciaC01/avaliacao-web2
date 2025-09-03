import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = ({
  itens = [],     
  valor = "",      
  aoAlterado = () => {}, 
  label = ""       
}) => {
  return (
    <div className="listasuspensa" style={{ marginBottom: "20px" }}>
      <label>
        {label}:
        <select value={valor} onChange={(e) => aoAlterado(e.target.value)}>
          <option value="">Todas</option>
          {itens.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ListaSuspensa;
