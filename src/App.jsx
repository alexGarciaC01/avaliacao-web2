import React, { useState } from "react";
import "./App.css";
import Area from "./componentes/Area";
import Formulario from "./componentes/Formulario";
import Titulo from "./componentes/Titulo";

const imagensMarcas = {
  HP: "/imagens-marcas/hp.png",
  Dell: "/imagens-marcas/dell.png",
  Asus: "/imagens-marcas/asus.png",
  Positivo: "/imagens-marcas/positivo1.png",
  "Xing Ling generico": "/imagens-marcas/xingling.jpg",
};

function App() {
  const secoes = ["Computadores", "Acessorios", "Impressoras", "Games", "Gadgets"];
  const marcas = Object.keys(imagensMarcas);

  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    const produtoComImagem = {
      ...produto,
      imagem: imagensMarcas[produto.marca] || "/imagens-marcas/generico.png",
    };
    setProdutos([...produtos, produtoComImagem]);
  };

  return (
    <div className="App">
      <Titulo />

      <Formulario secoes={secoes} marcas={marcas} aoProdutoCadastrado={adicionarProduto} />

      {produtos.length > 0 &&
        secoes.map((secao) => {
          const produtosSecao = produtos.filter((p) => p.secao === secao);
          if (produtosSecao.length === 0) return null;

          return (
            <Area
              key={secao}
              nome={secao}
              corPrimaria="#82cffa"
              corSecundaria="#e8f8ff"
              produtos={produtosSecao}
            />
          );
        })}
    </div>
  );
}

export default App;
