import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }
    onLogin(email);
  };

  return (
    <div className="login-container">
      <h2>Stock Broker Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
