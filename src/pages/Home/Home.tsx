import React, { useState } from "react";
import back1 from "@background/封面.png";
import back2 from "@background/人物制作.png";
import back3 from "@background/历史作品.png";
function App(props: {
  changePage: (num: number, mode?: number) => void;
  pageNum: number;
}) {
  const [page, setPage] = useState<number>(props.pageNum);
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
      {page === 2 && <Page3 changePage={(num: number) => setPage(num)} />}
    </div>
  );
}
function Page1(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode?: number) => void;
}) {
  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back1} alt="" />
      <div
        style={{
          width: 244,
          height: 89.32,
          // border: "black 1px solid",
          position: "absolute",
          top: 717,
          left: 651,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(1)}
      ></div>
      <div
        style={{
          width: 244,
          height: 89.32,
          // border: "black 1px solid",
          position: "absolute",
          top: 835,
          left: 651,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(1)}
      ></div>
    </div>
  );
}

function Page2(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode?: number) => void;
}) {
  return (
    <div>
      <img style={{ width: "100%", height: "100%" }} src={back2} alt="" />
      <div
        style={{
          width: 559,
          height: 730,
          // border: "black 1px solid",
          position: "absolute",
          top: 229,
          left: 182,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(2)}
      ></div>
      <div
        style={{
          width: 559,
          height: 730,
          // border: "black 1px solid",
          position: "absolute",
          top: 229,
          left: 803,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(3)}
      ></div>
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
        onClick={() => props.changePage(2)}
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
        onClick={() => props.changePage(0)}
      ></div>
    </div>
  );
}

function Page3(props: { changePage: (num: number) => void }) {
  const [index, setIndex] = useState(1);
  return (
    <div>
      <img style={{ width: "100%", height: "100%" }} src={back3} alt="" />
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
        onClick={() => props.changePage(1)}
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
    </div>
  );
}
export default App;
