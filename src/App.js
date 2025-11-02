import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <Dashboard userEmail={user} onLogout={() => setUser(null)} />
      )}
    </>
  );
}

export default App;
