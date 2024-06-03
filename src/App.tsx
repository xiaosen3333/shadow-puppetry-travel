import React from "react";
import "./App.css";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import CreateFast from "./pages/CreateFast/CreateFast";
import CreateManual from "./pages/CreateManual/CreateManual";
import "@arco-design/web-react/dist/css/arco.css";
import { ConfigProvider } from "antd";

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
        <ConfigProvider
          theme={{
            components: {
              Slider: {
                controlSize: 0,
                handleColor: "#A08359",
                handleActiveColor: "#A08359",
                handleSizeHover: 5,
                handleSize: 5,
                handleLineWidth: 5,
                handleLineWidthHover: 5,
                railBg: "#F3E6CE",
                trackBg: "#A6895F",
                railSize: 10,
                railHoverBg: "#F3E6CE",
                trackHoverBg: "#A6895F",
                dotActiveBorderColor: "#A08359",
              },
            },
          }}
        >
          <CreateManual
            changePage={(num, mode = 0) => {
              setPage(num);
              setPageNum(mode);
            }}
          />
        </ConfigProvider>
      )}
    </div>
  );
}

export default App;
