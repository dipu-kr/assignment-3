import React from "react";
import "../css/OrderConfirm.css";
import { MdInsertEmoticon } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OrderConfirm = () => {
  const navigate = useNavigate();
  return (
    <div className="order-confirm-main">
      <div className="order-confirm-container">
        <p>
          <MdInsertEmoticon />
          Your Order is Confirm, Thank You.
        </p>
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
  );
};

export default OrderConfirm;
