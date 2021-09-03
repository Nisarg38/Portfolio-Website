import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 0);
  }, []);

  return (
    <Router>
      <>
        {loading ? (
          <>{/*<Loading/> */}</>
        ) : (
          <>
            <Home />
          </>
        )}
      </>
    </Router>
  );
}

export default App;
