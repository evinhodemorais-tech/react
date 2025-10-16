import React from "react";

export default function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
    <div style={cardStyle}>
      <img
        src={imagem}
        alt={nome}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong>R$ {parseFloat(preco).toFixed(2)}</strong>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};
