import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "./CampoTexto";
import Botao from "./Botao";

const Formulario = ({ secoes, marcas, aoProdutoCadastrado }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [secao, setSecao] = useState("");
  const [marca, setMarca] = useState("");
  const [condicao, setCondicao] = useState("Novo");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    if (!nome || !preco || !secao || !marca) {
      alert("Preencha todos os campos!");
      return;
    }

    aoProdutoCadastrado({ nome, preco, secao, marca, condicao });

    // Limpar formulário
    setNome("");
    setPreco("");
    setSecao("");
    setMarca("");
    setCondicao("Novo");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Adicionar Produto</h2>

        <div className="campo-dropdown">
          <label>
            Seção:
            <select value={secao} onChange={(e) => setSecao(e.target.value)}>
              <option value="">Selecione</option>
              {secoes.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="campo-dropdown">
          <label>
            Marca:
            <select value={marca} onChange={(e) => setMarca(e.target.value)}>
              <option value="">Selecione</option>
              {marcas.map((m, i) => (
                <option key={i} value={m}>{m}</option>
              ))}
            </select>
          </label>
        </div>

        <CampoTexto
          label="Nome do Produto"
          placeholder="Digite o nome"
          valor={nome}
          aoAlterado={setNome}
        />

        <CampoTexto
          label="Preço"
          placeholder="Digite o preço"
          valor={preco}
          aoAlterado={setPreco}
        />

        <div className="campo-condicao">
          <span>Condição:</span>
          <label>
            <input
              type="radio"
              name="condicao"
              value="Novo"
              checked={condicao === "Novo"}
              onChange={(e) => setCondicao(e.target.value)}
            />
            Novo
          </label>
          <label>
            <input
              type="radio"
              name="condicao"
              value="Usado"
              checked={condicao === "Usado"}
              onChange={(e) => setCondicao(e.target.value)}
            />
            Usado
          </label>
        </div>

        <Botao>Adicionar Produto</Botao>
      </form>
    </section>
  );
};

export default Formulario;
