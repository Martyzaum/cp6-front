import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const products = [
    { id: 1, name: "Harry Potter e a Pedra Filosofal", price: 29.99 },
    { id: 2, name: "Harry Potter e a Câmara Secreta", price: 34.99 },
    { id: 3, name: "Harry Potter e o Prisioneiro de Azkaban", price: 27.99 },
    { id: 4, name: "Harry Potter e o Cálice de Fogo", price: 31.99 },
    { id: 5, name: "Harry Potter e a Ordem da Fênix", price: 33.99 },
    { id: 6, name: "Harry Potter e o Enigma do Príncipe", price: 28.99 },
    { id: 7, name: "Harry Potter e as Relíquias da Morte - 1", price: 30.99 },
    { id: 8, name: "Harry Potter e as Relíquias da Morte - 2", price: 32.99 },
    { id: 9, name: "Animais Fantásticos e Onde Habitam", price: 26.99 },
    {
      id: 10,
      name: "Piratas do Caribe: A Maldição do Pérola Negra",
      price: 35.99,
    },
    { id: 11, name: "Piratas do Caribe: O Baú da Morte", price: 37.99 },
    { id: 12, name: "Piratas do Caribe: No Fim do Mundo", price: 36.99 },
    {
      id: 13,
      name: "Piratas do Caribe: Navegando em Águas Misteriosas",
      price: 38.99,
    },
    { id: 14, name: "Piratas do Caribe: A Vingança de Salazar", price: 34.99 },
    { id: 15, name: "Piratas do Caribe: Sem Volta para Casa", price: 33.99 },
    { id: 16, name: "O Senhor dos Anéis: A Sociedade do Anel", price: 29.99 },
    { id: 17, name: "O Senhor dos Anéis: As Duas Torres", price: 30.99 },
    { id: 18, name: "O Senhor dos Anéis: O Retorno do Rei", price: 31.99 },
    { id: 19, name: "O Hobbit: Uma Jornada Inesperada", price: 27.99 },
    { id: 20, name: "O Hobbit: A Desolação de Smaug", price: 28.99 },
    { id: 21, name: "O Hobbit: A Batalha dos Cinco Exércitos", price: 29.99 },
    { id: 22, name: "O Silmarillion", price: 25.99 },
    { id: 23, name: "O Hobbit", price: 26.99 },
    { id: 24, name: "O Senhor dos Anéis", price: 27.99 },
    { id: 25, name: "O Silmarillion", price: 25.99 },
    { id: 26, name: "O Hobbit", price: 26.99 },
    { id: 27, name: "O Senhor dos Anéis", price: 27.99 },
    { id: 28, name: "O Silmarillion", price: 25.99 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Preço: R$ {product.price.toFixed(2)}</p>
          <Link to={`/produto/${product.id}`}>Ver detalhes</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
