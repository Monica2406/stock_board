import React from "react";

function StockCard({ stock, price }) {
  return (
    <div className="stock-card">
      <h3>{stock}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>${price}</p>
    </div>
  );
}

export default StockCard;
