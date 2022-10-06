import React, { useState } from "react";
import "../css/TopComponent.css";
import { HiSearch } from "react-icons/hi";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { searchItem } from "../redux/searchSlice";
import { useDispatch } from "react-redux";

const TopComponent = ({ setGetCategory, setGetSize }) => {
  const [query, setQuery] = useState("");

  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchFun = (searchquery) => {
    dispatch(searchItem(searchquery));
    setQuery("");
  };

  // useEffect(() => {
  //   setGetCategory(category);
  // }, [setGetCategory, category]);
  const getCategoryFun = (cate) => {
    setCategory(cate);
  };

  const getSizeFun = (siz) => {
    setSize(siz);
  };

  // useEffect(() => {
  //   setGetSize(size);
  // }, [setGetSize, size]);

  return (
    <div className="top-component-main">
      <div className="top-component-left-div">
        <div className="product-select-div">
          <select
            onChange={(e) => getCategoryFun(e.target.value)}
            value={category}
          >
            <option>All</option>
            <option>T-Shirt</option>
            <option>Shirt</option>
            <option>Jacket</option>
          </select>
        </div>
        <div className="size-select-div">
          <select onChange={(e) => getSizeFun(e.target.value)} value={size}>
            <option>All Size</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="reset-btn-div">
          <button>
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
