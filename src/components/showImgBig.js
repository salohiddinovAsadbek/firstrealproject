import { useState } from "react";
import "../styles/showImgBig.css";

function ShowImgBig({ img = "", setShow }) {
  const [animationD, setAnimation] = useState("");

  return (
    <div
      className="showImgBigWrapper"
      style={{ display: img === "" ? "none" : "flex" }}
      onClick={() => {
        setShow("");
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={img} alt="salom" />
        <button
          onMouseLeave={() => {
            setAnimation("reverseOut 0.3s forwards");
          }}
          onMouseEnter={() => {
            setAnimation("reverseIn 0.3s forwards");
          }}
          style={{ animation: animationD }}
          onClick={() => {
            setShow("");
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default ShowImgBig;
