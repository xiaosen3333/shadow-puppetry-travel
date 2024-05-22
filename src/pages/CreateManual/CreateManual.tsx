import React, { useState } from "react";
import back1 from "@background/自主创建-模板选择.png";
import back2 from "@background/自主创建-色盘.png";
import back3 from "@background/自主创建-智能配色.png";
import back4 from "@background/自主创建-纹样绘制.png";
import back5 from "@background/自主创建-AI优化.png";

function App(props: { changePage: (num: number, mode?: number) => void }) {
  const [page, setPage] = useState<number>(0);
  return (
    <div className="App">
      {page === 0 && (
        <Page1
          changePage={(num: number) => setPage(num)}
          changeMode={(num: number, mode?: number) =>
            props.changePage(num, mode)
          }
        />
      )}
      {page === 1 && (
        <Page2
          changePage={(num: number) => setPage(num)}
          changeMode={(num: number, mode?: number) =>
            props.changePage(num, mode)
          }
        />
      )}
      {page === 2 && (
        <Page3
          changePage={(num: number) => setPage(num)}
          changeMode={(num: number, mode?: number) =>
            props.changePage(num, mode)
          }
        />
      )}
      {page === 3 && (
        <Page4
          changePage={(num: number) => setPage(num)}
          changeMode={(num: number, mode?: number) =>
            props.changePage(num, mode)
          }
        />
      )}
      {page === 4 && (
        <Page5
          changePage={(num: number) => setPage(num)}
          changeMode={(num: number, mode?: number) =>
            props.changePage(num, mode)
          }
        />
      )}
    </div>
  );
}
function Page1(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode: number) => void;
}) {
  const [index, setIndex] = useState(1);

  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back1} alt="" />
      <div
        style={{
          width: 79.07,
          height: 216,
          // border: "black 1px solid",
          position: "absolute",
          top: 800,
          left: 1426.25,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(1)}
      >
        下一页
      </div>
      <div
        style={{
          width: 79.07,
          height: 216,
          // border: "black 1px solid",
          position: "absolute",
          top: 86,
          left: 1426.25,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(0, 2)}
      ></div>
      <div
        style={{
          width: 90,
          height: 141,
          // border: "black 1px solid",
          position: "absolute",
          top: 530,
          left: 30,
          cursor: "pointer",
        }}
        onClick={() => setIndex(index - 1)}
      ></div>
      <div
        style={{
          width: 90,
          height: 141,
          // border: "black 1px solid",
          position: "absolute",
          top: 530,
          left: 1405,
          cursor: "pointer",
        }}
        onClick={() => setIndex(index + 1)}
      ></div>
      <div
        style={{
          width: 130,
          height: 35,
          // border: "black 1px solid",
          position: "absolute",
          top: 57,
          left: 63,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(0, 1)}
      ></div>
    </div>
  );
}
function Page2(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode: number) => void;
}) {
  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back2} alt="" />

      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 154,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(1)}
      ></div>
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 455,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(2)}
      ></div>
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 755,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(3)}
      ></div>
      <div
        style={{
          width: 60,
          height: 38,
          // border: "black 1px solid",
          position: "absolute",
          top: 170,
          left: 53,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(0, 1)}
      ></div>
      <div
        style={{
          width: 244,
          height: 89.32,
          // border: "black 1px solid",
          position: "absolute",
          top: 887,
          left: 256,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(4)}
      ></div>
    </div>
  );
}
function Page3(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode: number) => void;
}) {
  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back3} alt="" />
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 154,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(1)}
      ></div>
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 455,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(2)}
      ></div>
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 755,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(3)}
      ></div>
      <div
        style={{
          width: 60,
          height: 38,
          // border: "black 1px solid",
          position: "absolute",
          top: 170,
          left: 53,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(0, 1)}
      ></div>
      <div
        style={{
          width: 244,
          height: 89.32,
          // border: "black 1px solid",
          position: "absolute",
          top: 887,
          left: 256,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(4)}
      ></div>
    </div>
  );
}
function Page4(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode: number) => void;
}) {
  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back4} alt="" />
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 154,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(1)}
      ></div>
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 455,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(2)}
      ></div>
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 755,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(3)}
      ></div>
      <div
        style={{
          width: 244,
          height: 89.32,
          // border: "black 1px solid",
          position: "absolute",
          top: 887,
          left: 256,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(4)}
      ></div>
      <div
        style={{
          width: 60,
          height: 38,
          // border: "black 1px solid",
          position: "absolute",
          top: 170,
          left: 53,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(0, 1)}
      ></div>
    </div>
  );
}

function Page5(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode: number) => void;
}) {
  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back5} alt="" />
      <div
        style={{
          width: 244,
          height: 89.32,
          // border: "black 1px solid",
          position: "absolute",
          top: 850,
          left: 1048,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(0, 0)}
      ></div>
    </div>
  );
}

export default App;
