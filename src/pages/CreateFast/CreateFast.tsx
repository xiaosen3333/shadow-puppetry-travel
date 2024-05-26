import React, { CSSProperties, useState } from "react";
import back1 from "@background/快捷创建-图生图.webp";
import back2 from "@background/快捷创建-文生图制.webp";
import styles from "./CreateFast.module.scss";
import { Spin, Upload } from "@arco-design/web-react";
import { UploadItem } from "@arco-design/web-react/es/Upload";
import py1 from "@image/py1.webp";
import py2 from "@image/py2.webp";
import py3 from "@image/py3.webp";
import py4 from "@image/py4.webp";
import { IconLoading } from "@arco-design/web-react/icon";
import chooseBack from "@image/chooseback.webp";

let createBody = {
  prompt: {
    positive: "",
    negative: "",
  },
  img: "",
};
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
    </div>
  );
}
function Page1(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode: number) => void;
}) {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [choose, setChoose] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string[]>([]);
  function create() {
    //TODO 生6张图
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult([py1, py2, py3, py4, py1, py2]);
    }, 2000);
  }
  const resultsStyle: CSSProperties[] = [
    {
      left: "1108.68px",
      top: "280px",
    },
    {
      left: "1277px",
      top: "280px",
    },
    {
      left: "1108.68px",
      top: "524px",
    },
    {
      left: "1277px",
      top: "524px",
    },
    {
      left: "1108.68px",
      top: "763px",
    },
    {
      left: "1277px",
      top: "763px",
    },
  ];
  return (
    <Spin
      loading={loading}
      size={100}
      style={{ color: "white" }}
      icon={<IconLoading />}
    >
      <img style={{ width: "100%", height: "100%" }} src={back1} alt="" />
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 164,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(0)}
      ></div>
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 465,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(1)}
      ></div>
      <div
        style={{
          width: 56,
          height: 35,
          // border: "black 1px solid",
          position: "absolute",
          top: 175,
          left: 55,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(0, 1)}
      ></div>
      <Upload
        action="/"
        showUploadList={false}
        onChange={(files, file: UploadItem) => {
          setImgUrl(URL.createObjectURL(file.originFile as any));
          createBody.img = URL.createObjectURL(file.originFile as any);
        }}
      >
        <div className={styles.upload}>
          {imgUrl && <img src={imgUrl} alt="" />}
        </div>
      </Upload>
      <div className={styles.createbtn} onClick={create}></div>
      <div className={styles.results}>
        {result.map((item, index) => (
          <img
            src={item}
            alt=""
            style={resultsStyle[index]}
            onClick={() => setChoose(index)}
          />
        ))}
      </div>
      {result.length !== 0 && result && (
        <div>
          <img className={styles.chooseimg} alt="" src={result[choose]}></img>
          <img
            className={styles.chooseback}
            alt=""
            src={chooseBack}
            style={resultsStyle[choose]}
          ></img>
        </div>
      )}
    </Spin>
  );
}

function Page2(props: {
  changePage: (num: number) => void;
  changeMode: (num: number, mode: number) => void;
}) {
  const [choose, setChoose] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string[]>(["", ""]);
  function create() {
    //TODO 生6张图
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult([py1, py2, py3, py4, py1, py2]);
    }, 2000);
  }
  const resultsStyle: CSSProperties[] = [
    {
      left: "1108.68px",
      top: "280px",
    },
    {
      left: "1277px",
      top: "280px",
    },
    {
      left: "1108.68px",
      top: "524px",
    },
    {
      left: "1277px",
      top: "524px",
    },
    {
      left: "1108.68px",
      top: "763px",
    },
    {
      left: "1277px",
      top: "763px",
    },
  ];
  return (
    <Spin
      loading={loading}
      size={100}
      style={{ color: "white" }}
      icon={<IconLoading />}
    >
      <img style={{ width: "100%", height: "100%" }} src={back2} alt="" />
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 164,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(0)}
      ></div>
      <div
        style={{
          width: 280,
          height: 68,
          // border: "black 1px solid",
          position: "absolute",
          top: 159,
          left: 465,
          cursor: "pointer",
        }}
        onClick={() => props.changePage(1)}
      ></div>
      <div
        style={{
          width: 56,
          height: 35,
          // border: "black 1px solid",
          position: "absolute",
          top: 175,
          left: 55,
          cursor: "pointer",
        }}
        onClick={() => props.changeMode(0, 1)}
      ></div>
      <div className={styles.inputs}>
        <textarea
          autoFocus
          value={prompt[0]}
          onChange={(e) => setPrompt([e.target.value, prompt[1]])}
          maxLength={30}
          rows={4}
        />
        <textarea
          value={prompt[1]}
          onChange={(e) => setPrompt([prompt[0], e.target.value])}
          maxLength={30}
          rows={4}
        />
      </div>
      <div className={styles.createbtn} onClick={create}></div>
      <div className={styles.results}>
        {result.map((item, index) => (
          <img
            src={item}
            alt=""
            style={resultsStyle[index]}
            onClick={() => setChoose(index)}
          />
        ))}
      </div>
      {result.length !== 0 && result && (
        <div>
          <img className={styles.chooseimg} alt="" src={result[choose]}></img>
          <img
            className={styles.chooseback}
            alt=""
            src={chooseBack}
            style={resultsStyle[choose]}
          ></img>
        </div>
      )}
    </Spin>
  );
}

export default App;
