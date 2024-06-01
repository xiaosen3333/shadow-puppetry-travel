import React, { Fragment, useEffect, useRef, useState } from "react";
import back1 from "@background/自主创建-模板选择.webp";
import back2 from "@background/自主创建-色盘.webp";
import back3 from "@background/自主创建-智能配色.webp";
import back4 from "@background/自主创建-纹样绘制.webp";
import back5 from "@background/自主创建-AI优化.webp";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { Carousel, Slider } from "@arco-design/web-react";
import py1 from "@image/py1.webp";
import py2 from "@image/py2.webp";
import py3 from "@image/py3.webp";
import py4 from "@image/py4.webp";
import kid from "@image/kid.webp";
import human from "@image/human.webp";
import women from "@image/women.webp";
import styles from "./CreateManual.module.scss";
import oldwomen from "@image/oldwomen.webp";
import { CarouselHandle } from "@arco-design/web-react/es/Carousel/interface";
import pen from "@image/pen.webp";
import eraser from "@image/eraser.webp";

import {
  Sketch,
  Material,
  Colorful,
  Compact,
  Circle,
  Wheel,
  Block,
  Github,
  Chrome,
  hsvaToHex,
} from "@uiw/react-color";
import {
  Alpha,
  Hue,
  ShadeSlider,
  Saturation,
  hsvaToHslaString,
} from "@uiw/react-color";
import {
  EditableInput,
  EditableInputRGBA,
  EditableInputHSLA,
} from "@uiw/react-color";

let template = 0;
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
  const [index, setIndex] = useState(0);
  const imageSrc = [kid, oldwomen, women];
  const carouselRef = useRef(null);
  useEffect(() => {
    console.log(index);
    template = index;
  }, [index]);
  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back1} alt="" />
      <Carousel
        animation="card"
        onChange={(index) => setIndex(index)}
        // showArrow="a"
        ref={carouselRef}
        indicatorType="never"
        style={{ width: "95%", height: 1040, position: "absolute", top: 346 }}
        arrowClassName={styles.arrow}
      >
        {imageSrc.map((src, index) => (
          <div key={index} style={{ width: "60%" }}>
            <img
              src={src}
              alt=""
              style={{ height: "60%", cursor: "pointer" }}
              onClick={() => props.changePage(1)}
            />
          </div>
        ))}
      </Carousel>
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
  const [radio, setRadio] = useState(0);
  const [alphaValue, setAlphaValue] = useState(50);
  const [sizeValue, setSizeValue] = useState(20);
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });

  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back2} alt="" />
      <div className={styles.colorpicker}>
        <Fragment>
          <Wheel
            color={hsva}
            width={363}
            height={363}
            onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
          />
          {/* <ShadeSlider
            hsva={hsva}
            style={{ width: 210, marginTop: 20 }}
            onChange={(newShade) => {
              setHsva({ ...hsva, ...newShade });
            }}
          /> */}
          <div
            className={styles.color}
            style={{
              background: hsvaToHex(hsva),
            }}
          ></div>
        </Fragment>
      </div>
      <div className={styles.colorcards}>
        <div className={styles.colorcard}></div>
        <div className={styles.colorcard}></div>
        <div className={styles.colorcard}></div>
        <div className={styles.colorcard}></div>
        <div className={styles.colorcard}></div>
        <div className={styles.colorcard}></div>
        <div className={styles.colorcard}></div>
      </div>
      <div className={styles.drawingboard}>
        <ReactSketchCanvas
          ref={(reactSketchCanvas) => {
            reactSketchCanvas?.eraseMode(radio === 1);
          }}
          strokeColor={hsvaToHex(hsva)}
          eraserWidth={sizeValue}
          strokeWidth={sizeValue}
          canvasColor="transparent"
          style={{ border: "none" }}
          backgroundImage={human}
        />
      </div>
      <div
        style={{
          width: 280,
          height: 68,
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
        onClick={() => props.changePage(0)}
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
      <div>
        <img
          className={styles.pen}
          src={pen}
          alt=""
          style={{ top: radio === 0 ? 679 : 709 }}
          onClick={() => setRadio(0)}
        />
        <img
          className={styles.eraser}
          src={eraser}
          alt=""
          style={{ top: radio === 1 ? 710 : 740 }}
          onClick={() => setRadio(1)}
        />
      </div>
      <div>
        <Slider
          value={alphaValue}
          tooltipVisible={false}
          className={styles.slider1}
          onChange={(value) => {
            setAlphaValue(value as number);
            setHsva({ ...hsva, a: (value as number) / 100 });
          }}
        ></Slider>
        <Slider
          value={sizeValue}
          tooltipVisible={false}
          className={styles.slider2}
          onChange={(value) => {
            setSizeValue(value as number);
          }}
        ></Slider>
      </div>
      {/* <div className={styles.rainbowcircle}></div> */}
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
