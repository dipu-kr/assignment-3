import React, { useState } from "react";
import "../css/TopComponent.css";
import { HiSearch } from "react-icons/hi";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { searchItem } from "../redux/searchSlice";
import { useDispatch } from "react-redux";

const TopComponent = ({ getCategory, setGetCategory, getSize, setGetSize }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [query, setQuery] = useState("");

  const options = ["All", "T-shirt", "shirt", "jacket"];
  const options1 = ["L", "XL", "XXL"];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchFun = (searchquery) => {
    dispatch(searchItem(searchquery));
    setQuery("");
  };

  const resetFun = (param) => {
    setGetCategory(param);
    setGetSize("");
  };

  return (
    <div className="top-component-main">
      <div className="top-component-left-div">
        <div className="product-select-div">
          <div className="dropdown">
            <p style={{ fontWeight: "500" }}>Category</p>
            <div
              className="dropdown-btn"
              onClick={() => setIsActive(!isActive)}
            >
              <span>{getCategory}</span>
              <span>
                <MdArrowDropDown />
              </span>
            </div>
            {isActive && (
              <div className="dropdown-content">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={(e) => {
                      setGetCategory(option);
                      setIsActive(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="size-select-div">
          <div className="dropdown">
            <p style={{ fontWeight: "500" }}>Size</p>
            <div
              className="dropdown-btn"
              onClick={() => setIsActive1(!isActive1)}
            >
              <span>{getSize}</span>
              <span>
                <MdArrowDropDown />
              </span>
            </div>
            {isActive1 && (
              <div className="dropdown-content">
                {options1.map((option1, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={(e) => {
                      setGetSize(option1);
                      setIsActive1(false);
                    }}
                  >
                    {option1}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="reset-btn-div">
          <button onClick={() => resetFun("All")}>
            <BsArrowCounterclockwise />
            Reset
          </button>
        </div>
      </div>
      <div className="top-component-right-div">
        <div className="search-div">
          <input
            type="text"
            placeholder="Search Products..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => searchFun(query)}>
            <HiSearch />
          </button>
        </div>
        <div className="add-to-cart-div">
          <button onClick={() => navigate("/Cart")}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
