import React from "react";
import "../css/CartPage.css";
import CartProduct from "../components/CartProduct";
import Checkout from "../components/Checkout";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <>
      {cart.cartItems.length > 0 ? (
        <div className="cart-page-main">
          <div className="cart-page-left-div">
            <div className="left-div-container">
              <div className="cart-page-div-1">
                <p>product</p>
              </div>
              <div className="cart-page-div-2">
                <p>price</p>
                <p>quantity</p>
                <p>subtotal</p>
              </div>
            </div>
            <CartProduct />
            <div className="continue-shopping-btn">
              <button onClick={() => navigate("/")}>
                <span>
                  <BsArrowLeft />
                </span>
                Continue shopping
              </button>
            </div>
          </div>
          <div className="cart-page-right-div">
            <Checkout />
          </div>
        </div>
      ) : (
        <div className="order-confirm-main">
          <div className="order-confirm-container">
            <p>Your Cart is Empty.</p>
            <div className="back-to-home-btn">
              <button onClick={() => navigate("/")}>
                <span>
                  <BsArrowLeft />
                </span>
                back to home page
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
