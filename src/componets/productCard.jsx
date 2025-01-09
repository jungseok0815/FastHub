import React from "react";
import "../css/ProductCard.css";
function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
    </div>
  );
}

export default ProductCard;
