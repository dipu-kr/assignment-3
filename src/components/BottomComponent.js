import React, { useEffect, useState } from "react";
import "../css/BottomComponent.css";
import { MdOutlineShoppingCart, MdOutlineInsertEmoticon } from "react-icons/md";
import { data } from "../assets/data.js";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addToCart } from "../redux/cartSlice";

const BottomComponent = ({ getCategory, getSize }) => {
  const [allProducts, setAllProducts] = useState(data);

  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);
  let qty = parseInt(value);

  const searchQuery = useSelector((state) => state.search.searchData);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
  }

  const addItem = (product) => {
    if (check === true && qty >= 1) {
      dispatch(addToCart(product));
      setValue("");
      setCheck(false);
    }
  };

  useEffect(() => {
    if (getCategory === "All") {
      setAllProducts(data);
    }
    if (getCategory === "T-shirt") {
      const filteredProducts = data.filter((item) => item.name === "T-shirt");

      setAllProducts(filteredProducts);
    }
    if (getCategory === "shirt") {
      const filteredProducts = data.filter((item) => item.name === "shirt");

      setAllProducts(filteredProducts);
    }
    if (getCategory === "jacket") {
      const filteredProducts = data.filter((item) => item.name === "jacket");

      setAllProducts(filteredProducts);
    }
  }, [getCategory]);

  return (
    <div className="bottom-component-main">
      {allProducts
        .filter((searchPro) =>
          searchPro.name.toLowerCase().includes(searchQuery)
        )
        .map((product) => (
          <div className="bottom-component-container" key={product.id}>
            <div className="bottom-left-div">
              <div className="home-img-div">
                <img src={product.img} alt="pro-img" />
              </div>
              <p>{product.name}</p>
            </div>
            <div className="bottom-center-div">
              <p>{product.color}</p>
              <div className="stock-div">
                <MdOutlineInsertEmoticon />
                In Stock
              </div>
              <p>${product.price}</p>
            </div>
            <div className="bottom-right-div">
              <div className="add-to-cart-btn-div">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={() => addItem({ ...product, qty: qty })}
                  >
                    <MdOutlineShoppingCart />
                  </button>
                  <input
                    type="checkbox"
                    onChange={(e) => setCheck(e.target.checked)}
                  />
                </form>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BottomComponent;
