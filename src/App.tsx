import React from "react";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import CreateFast from "./pages/CreateFast/CreateFast";
import CreateManual from "./pages/CreateManual/CreateManual";

function App() {
  const [page, setPage] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  return (
    <div className="App">
      {page === 0 && (
        <Home
          pageNum={pageNum}
          changePage={(num, mode = 0) => {
            setPage(num);
            setPageNum(mode);
          }}
        />
      )}
      {page === 1 && <Game></Game>}
      {page === 2 && (
        <CreateFast
          changePage={(num, mode = 0) => {
            setPage(num);
            setPageNum(mode);
          }}
        />
      )}
      {page === 3 && (
        <CreateManual
          changePage={(num, mode = 0) => {
            setPage(num);
            setPageNum(mode);
          }}
        />
      )}
    </div>
  );
}

export default App;
