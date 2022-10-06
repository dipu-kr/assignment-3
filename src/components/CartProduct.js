import React from "react";
import "../css/CartPage.css";
import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCartItem,
  deleteCartItem,
} from "../redux/cartSlice";

const CartProduct = () => {
  const cart = useSelector((state) => state.cart);

  // console.log(cart.cartItems);
  const dispatch = useDispatch();

  const increaseCartItem = (item) => {
    dispatch(addToCart(item));
  };

  const decreaseItem = (item) => {
    dispatch(decreaseCartItem(item));
  };

  const deleteItem = (item) => {
    dispatch(deleteCartItem(item));
  };

  return (
    <>
      {cart.cartItems?.map((item) => (
        <div className="cart-product-container" key={item.id}>
          <div className="cart-product-div-1">
            <div className="delete-btn-div">
              <span onClick={() => deleteItem(item)}>
                <RiDeleteBin6Line />
              </span>
            </div>
            <div style={{ margin: "0 40px" }}>
              <div style={{ width: "80px", height: "100px" }}>
                <img
                  src={item.img}
                  alt="cart-img"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>
                {item.name}
              </p>
            </div>
          </div>
          <div className="cart-product-div-2">
            <div>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>
                ${item.price.toFixed(2)}
              </p>
            </div>
            <div>
              <div className="incre-decre-btn">
                <span className="minus-btn" onClick={() => decreaseItem(item)}>
                  <AiOutlineMinus />
                </span>
                <span style={{ color: "gray" }}>{item.qty}</span>
                <span
                  className="plus-btn"
                  onClick={() => increaseCartItem(item)}
                >
                  <FiPlus />
                </span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: "600", color: "gray" }}>
                ${(item.price * item.qty).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartProduct;
