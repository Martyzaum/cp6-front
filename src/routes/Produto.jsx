import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Produto = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Harry Potter e a Pedra Filosofal",
      price: 29.99,
      image:
        "https://i.pinimg.com/736x/9b/e5/99/9be599cf8795ef72762d0d47deb4b064.jpg",
    },
    {
      id: 2,
      name: "Harry Potter e a Câmara Secreta",
      price: 34.99,
      image:
        "https://img.elo7.com.br/product/685x685/2657601/big-poster-filme-harry-potter-e-a-camara-secreta-lo02-90x60-geek.jpg",
    },
    {
      id: 3,
      name: "Harry Potter e o Prisioneiro de Azkaban",
      price: 27.99,
      image:
        "https://static.wikia.nocookie.net/harrypotter/images/8/81/Capa_Harry_Potter_e_o_Prisioneiro_de_Azkaban_%28filme%29.jpg/revision/latest?cb=20130101153549&path-prefix=pt-br",
    },
    { id: 4, name: "Harry Potter e o Cálice de Fogo", price: 31.99, image: "" },
    { id: 5, name: "Harry Potter e a Ordem da Fênix", price: 33.99, image: "" },
    {
      id: 6,
      name: "Harry Potter e o Enigma do Príncipe",
      price: 28.99,
      image: "",
    },
    {
      id: 7,
      name: "Harry Potter e as Relíquias da Morte - 1",
      price: 30.99,
      image: "",
    },
    {
      id: 8,
      name: "Harry Potter e as Relíquias da Morte - 2",
      price: 32.99,
      image: "",
    },
    {
      id: 9,
      name: "Animais Fantásticos e Onde Habitam",
      price: 26.99,
      image: "",
    },
    {
      id: 10,
      name: "Piratas do Caribe: A Maldição do Pérola Negra",
      price: 35.99,
      image: "",
    },
    {
      id: 11,
      name: "Piratas do Caribe: O Baú da Morte",
      price: 37.99,
      image: "",
    },
    {
      id: 12,
      name: "Piratas do Caribe: No Fim do Mundo",
      price: 36.99,
      image: "",
    },
    {
      id: 13,
      name: "Piratas do Caribe: Navegando em Águas Misteriosas",
      price: 38.99,
      image: "",
    },
    {
      id: 14,
      name: "Piratas do Caribe: A Vingança de Salazar",
      price: 34.99,
      image: "",
    },
    {
      id: 15,
      name: "Piratas do Caribe: Sem Volta para Casa",
      price: 33.99,
      image: "",
    },
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
  const product = products.find((product) => product.id === Number(id));

  return (
    <div className="product-details">
      <div className="card card-product">
        <img
          src={product.image} // Placeholder image URL
          alt={product.name}
          className="card-img-top"
          //   limit the image height to 200px
          style={{
            maxHeight: 720,
            maxWidth: 1080,
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Preço: R$ {product.price.toFixed(2)}</p>
          <button className="btn btn-primary" onClick={() => {}}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produto;
