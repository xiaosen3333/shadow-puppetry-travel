import React from "react";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
  const [page, setPage] = useState<number>(0);
  return (
    <div className="App">
      {page === 0 && <Home changePage={(num) => setPage(num)} />}
    </div>
  );
}

export default App;
