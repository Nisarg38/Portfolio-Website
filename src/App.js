import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Home from "./pages";
import Loading from "./components/Priview/Loading";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <Router>
      <>
        {loading ? (
          <>
            <Loading />{" "}
          </>
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
