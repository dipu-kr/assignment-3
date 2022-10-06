import React from "react";
import "../css/CartPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const subTotal = cart.cartItems.reduce(
    (total, quantity) => total + quantity.price * quantity.qty,
    0
  );
  const shippingCharge = subTotal > 200 ? 0 : 10;
  const totalPrice = subTotal + shippingCharge;

  return (
    <div className="cart-page-right-container">
      <div className="checkout-div">
        <h3 className="checkout-header">Cart Totals</h3>
        <div className="subtotal-div">
          <h5>Subtotal</h5>
          <h5>${subTotal.toFixed(2)}</h5>
        </div>
        <hr />
        <div className="shipping-charge">
          <h6>Shipping Charge</h6>
          <h6>${shippingCharge.toFixed(2)}</h6>
        </div>
        <div className="total-div">
          <h4>Total</h4>
          <h4>${totalPrice.toFixed(2)}</h4>
        </div>
        <div className="checkout-btn">
          <button onClick={() => navigate("/checkout")}>
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
