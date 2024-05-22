import React, { useState } from "react";
import back1 from "@background/封面.png";
function App(props: { changePage: (num: number) => void }) {
  const [page, setPage] = useState<number>(0);
  return (
    <div className="App">
      {page === 0 && (
        <Page1
          changePage={(num: number) => setPage(num)}
          changeMode={(num: number) => props.changePage(num)}
        />
      )}
    </div>
  );
}
function Page1(props: {
  changePage: (num: number) => void;
  changeMode: (num: number) => void;
}) {
  return (
    <div className="App">
      <img style={{ width: "100%", height: "100%" }} src={back1} alt="" />
      <div
        style={{
          width: 244,
          height: 89.32,
          border: "black 1px solid",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      ></div>
    </div>
  );
}
export default App;
