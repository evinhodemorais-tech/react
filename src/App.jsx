import React from "react";
import Catalogo from "./pages/Catalogo";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Pet&Style - Catálogo de Produtos</h1>
        <p>Produtos estilosos e confortáveis para o seu pet!</p>
      </header>

      <Catalogo />

      <footer className="footer">
        <p>© 2025 Pet&Style. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
