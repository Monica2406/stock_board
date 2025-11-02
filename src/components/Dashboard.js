import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";

const STOCKS = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];

function Dashboard({ userEmail, onLogout }) {
  const [subscribed, setSubscribed] = useState([]);
  const [prices, setPrices] = useState({});

  // Initialize prices
  useEffect(() => {
    const initialPrices = {};
    STOCKS.forEach((s) => {
      initialPrices[s] = (Math.random() * 1000).toFixed(2);
    });
    setPrices(initialPrices);
  }, []);

  // Update prices every second
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) => {
        const newPrices = { ...prev };
        subscribed.forEach((s) => {
          const change = (Math.random() * 20 - 10).toFixed(2); // random +/-
          newPrices[s] = (parseFloat(newPrices[s]) + parseFloat(change)).toFixed(2);
        });
        return newPrices;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [subscribed]);

  const handleSubscribe = (stock) => {
    if (!subscribed.includes(stock)) setSubscribed([...subscribed, stock]);
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {userEmail}</h2>
      <button onClick={onLogout} style={{ backgroundColor: "red" }}>Logout</button>

      <h3>Subscribe to Stocks</h3>
      <select onChange={(e) => handleSubscribe(e.target.value)}>
        <option value="">Select Stock</option>
        {STOCKS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <div className="stock-grid">
        {subscribed.map((s) => (
          <StockCard key={s} stock={s} price={prices[s]} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
