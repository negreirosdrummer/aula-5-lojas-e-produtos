import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetail.css"

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = {
    id: productId,
    name: "Produto " + productId,
    description: "Descrição do produto " + productId + "."
  };

  const handleBack = () => {
    navigate(`/store/${product.id}`);
  };

  return (
    <div className="product-detail-container">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <button onClick={handleBack} className="back-button">
        Voltar para a lista de produtos
      </button>
    </div>
  );
}

export default ProductDetail;
