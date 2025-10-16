import React, { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  // Simulação de carregamento (mock da API)
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Coleira Estilosa",
          preco: 49.9,
          descricao: "Coleira ajustável com design moderno.",
          imagem: "download(2).jpg",
        },
        {
          id: 2,
          nome: "Caminha Conforto",
          preco: 129.9,
          descricao: "Caminha macia e lavável para seu pet.",
          imagem: "download(1).jpg",
        },
      ]);
      setCarregando(false);
    }, 1500);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.descricao) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const novo = {
      id: produtos.length + 1,
      ...novoProduto,
      imagem: novoProduto.imagem || "https://via.placeholder.com/200",
    };

    setProdutos([...produtos, novo]);
    setNovoProduto({ nome: "", preco: "", descricao: "", imagem: "" });
  }

  if (carregando) {
    return <p style={{ textAlign: "center" }}>Carregando produtos...</p>;
  }

  return (
    <div className="catalogo-container" style={{ padding: "20px" }}>
      <h2>Adicionar Novo Produto</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChange={handleChange}
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={handleChange}
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={novoProduto.descricao}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem (opcional)"
          value={novoProduto.imagem}
          onChange={handleChange}
        />
        <button type="submit">Adicionar Produto</button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <div style={gridStyle}>
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "400px",
  margin: "0 auto",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};
