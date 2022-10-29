import React from "react";

const Background = new URL("./img/bg.png", import.meta.url);

function Bg() {
  return (
    <img
      style={{
        top: "0",
        position: "absolute",
        zIndex: "-10",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      src={Background}
      alt="bg-img"
    ></img>
  );
}

export default Bg;
