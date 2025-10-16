import React from "react";

export default function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />
      <div className="produto-info">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <span className="preco">R$ {parseFloat(preco).toFixed(2)}</span>
      </div>
    </div>
  );
}
