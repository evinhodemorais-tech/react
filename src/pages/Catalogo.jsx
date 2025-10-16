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

  useEffect(() => {
    // Simula um carregamento de "API"
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Coleira Estilosa",
          preco: 49.9,
          descricao: "Coleira ajustável com design moderno e resistente.",
          imagem:
            "https://images.unsplash.com/photo-1601758123927-19686a9e5d0a?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 2,
          nome: "Caminha Conforto",
          preco: 129.9,
          descricao: "Caminha macia e lavável para o conforto do seu pet.",
          imagem:
            "https://images.unsplash.com/photo-1601758124040-1d5f9f8f7f7e?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 3,
          nome: "Brinquedo Mordedor",
          preco: 29.9,
          descricao: "Brinquedo colorido ideal para cães de pequeno porte.",
          imagem:
            "https://images.unsplash.com/photo-1601758174772-b2c3b2b4bde0?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 4,
          nome: "Tigela Inox Premium",
          preco: 59.9,
          descricao: "Tigela de aço inoxidável antiderrapante e higiênica.",
          imagem:
            "https://images.unsplash.com/photo-1598133894003-cd3a45dc57f8?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 5,
          nome: "Casinha de Madeira",
          preco: 299.9,
          descricao: "Casinha confortável, resistente e de fácil limpeza.",
          imagem:
            "https://images.unsplash.com/photo-1619983081563-430d43c45d3d?auto=format&fit=crop&w=500&q=80",
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
      imagem:
        novoProduto.imagem ||
        "https://via.placeholder.com/400x300?text=Produto+Pet",
    };

    setProdutos([...produtos, novo]);
    setNovoProduto({ nome: "", preco: "", descricao: "", imagem: "" });
  }

  if (carregando) {
    return <p className="loading">Carregando produtos...</p>;
  }

  return (
    <div className="catalogo">
      <section className="form-section">
        <h2>Adicionar Novo Produto</h2>

        <form onSubmit={handleSubmit} className="formulario">
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
      </section>

      <hr />

      <section className="produtos">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} {...produto} />
        ))}
      </section>
    </div>
  );
}
