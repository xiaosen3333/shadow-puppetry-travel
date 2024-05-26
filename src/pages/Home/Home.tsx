import React, { useRef, useState } from "react";
import back1 from "@background/封面.webp";
import back2 from "@background/人物制作.webp";
import back3 from "@background/历史作品.webp";
import py1 from "@image/py1.webp";
import py2 from "@image/py2.webp";
import py3 from "@image/py3.webp";
import py4 from "@image/py4.webp";
import styles from "./Home.module.scss";
import { CSSProperties } from "react";
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
  const [imgs, setImgs] = useState([py1, py2, py3, py4]);
  const refimg = useRef<HTMLImageElement[]>([]);

  const imgStyles = [
    {
      left: "0px",
      height: "470px",
      transition: "1s ease",
    },
    {
      left: "350px",
      height: "575px",
      transition: "1s ease",
    },
    {
      left: "680px",
      height: "575px",
      transition: "1s ease",
    },
    {
      left: "1000px",
      height: "470px",
      transition: "0.5s ease",
    },
  ];
  function changeImgs(forward: boolean) {
    if (
      refimg.current[0] &&
      refimg.current[1] &&
      refimg.current[2] &&
      refimg.current[3]
    ) {
      if (forward) {
        refimg.current[(index + 2) % 4].style.left = "1500px";
        refimg.current[(index + 3) % 4].style.left = imgStyles[1].left;
        refimg.current[(index + 3) % 4].style.height = imgStyles[1].height;
        refimg.current[(index + 3) % 4].style.transition =
          imgStyles[1].transition;
        refimg.current[index % 4].style.left = imgStyles[2].left;
        refimg.current[index % 4].style.height = imgStyles[2].height;
        refimg.current[index % 4].style.transition = imgStyles[2].transition;
        refimg.current[(index + 1) % 4].style.left = imgStyles[3].left;
        refimg.current[(index + 1) % 4].style.height = imgStyles[3].height;
        setTimeout(() => {
          refimg.current[(index + 2) % 4].style.display = "none";

          refimg.current[(index + 2) % 4].style.left = "-400px";
        }, 300);
        setTimeout(() => {
          refimg.current[(index + 2) % 4].style.display = "block";
        }, 400);
        setTimeout(() => {
          refimg.current[(index + 2) % 4].style.transition = "0.5s ease";
          refimg.current[(index + 2) % 4].style.left = imgStyles[0].left;
          refimg.current[(index + 2) % 4].style.height = imgStyles[0].height;
        }, 500);
        setTimeout(() => {
          refimg.current[(index + 2) % 4].style.transition =
            imgStyles[0].transition;
          refimg.current[(index + 1) % 4].style.transition =
            imgStyles[3].transition;
        }, 600);
        setIndex((index + 3) % 4);
      } else {
        refimg.current[(index + 2) % 4].style.left = "-400px";
        refimg.current[(index + 2) % 4].style.left = imgStyles[2].left;
        refimg.current[(index + 2) % 4].style.height = imgStyles[2].height;

        refimg.current[index % 4].style.left = imgStyles[0].left;
        refimg.current[index % 4].style.height = imgStyles[0].height;
        refimg.current[index % 4].style.transition = imgStyles[0].transition;
        refimg.current[(index + 1) % 4].style.left = imgStyles[1].left;
        refimg.current[(index + 1) % 4].style.height = imgStyles[1].height;
        refimg.current[(index + 1) % 4].style.transition =
          imgStyles[1].transition;
        setTimeout(() => {
          refimg.current[(index + 3) % 4].style.display = "none";

          refimg.current[(index + 3) % 4].style.left = "1500px";
        }, 300);
        setTimeout(() => {
          refimg.current[(index + 3) % 4].style.display = "block";
        }, 400);
        setTimeout(() => {
          refimg.current[(index + 3) % 4].style.transition = "0.5s ease";
          refimg.current[(index + 3) % 4].style.left = imgStyles[3].left;
          refimg.current[(index + 3) % 4].style.height = imgStyles[3].height;
        }, 500);
        setTimeout(() => {
          refimg.current[(index + 3) % 4].style.transition =
            imgStyles[0].transition;
          refimg.current[(index + 2) % 4].style.transition =
            imgStyles[3].transition;
        }, 600);
        console.log(index);
        setIndex((index + 1) % 4);
      }
    }
  }
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
        onClick={() => changeImgs(true)}
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
        onClick={() => changeImgs(false)}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 307,
          width: 1346,
          height: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: 100,
        }}
      >
        <div className={styles.imgs}>
          <img
            src={imgs[0]}
            alt=""
            ref={(el: HTMLImageElement) => {
              refimg.current[0] = el;
            }}
          />
          <img
            src={imgs[1]}
            alt=""
            ref={(el: HTMLImageElement) => {
              refimg.current[1] = el;
            }}
          />
          <img
            src={imgs[2]}
            alt=""
            ref={(el: HTMLImageElement) => {
              refimg.current[2] = el;
            }}
          />
          <img
            src={imgs[3]}
            alt=""
            ref={(el: HTMLImageElement) => {
              refimg.current[3] = el;
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
