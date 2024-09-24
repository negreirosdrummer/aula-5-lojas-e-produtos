import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/Store.css";

function Store() {
  const { storeId } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Produto 1",
      description: "Descrição do Produto 1."
    },
    {
      id: 2,
      name: "Produto 2",
      description: "Descrição do Produto 2."
    },
    {
      id: 3,
      name: "Produto 3",
      description: "Descrição do Produto 3."
    }
  ];

  const filteredProducts = products.filter(
    (product) => product.id === parseInt(storeId, 10)
  );

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="store-container">
      <h2>Produtos da Loja {storeId}:</h2>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li className="product-item" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <Link to={`/product/${product.id}`} className="store-link">
            Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleBackToHome} className="back-button">
        Voltar para a página inicial
      </button>
    </div>
  );
}

export default Store;
