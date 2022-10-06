import React from "react";
import "../css/MiddleComponent.css";
// import { AiFillCaretDown } from "react-icons/ai";

const MiddleComponent = () => {
  return (
    <div className="middle-component-main">
      <div className="middle-left-div">
        <p>image</p>
        <p>name</p>
      </div>
      <div className="middle-center-div">
        <p>color</p>
        <p>stock</p>
        <p>price</p>
      </div>
      <div className="middle-right-div">
        <p>Buy</p>
      </div>
    </div>
  );
};

export default MiddleComponent;
