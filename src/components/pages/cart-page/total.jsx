import React, {} from "react";
import { withRouter, useLocation } from "react-router";

const Total = ({ itemCount, total, history, clearCart }) => {

  return (
    <div className="total-container">
    
      <div className="checkout">
      <div className="total">
        <p>Total Items: {itemCount}</p>
        <p>{`Total: ₦ ${total}`}</p>
      </div>
        <button
          className="button is-black"
          onClick={() => {
            if (localStorage.getItem("user-details")) {
              history.push("/checkout");
            } else {
              history.push("/login");
            }
          }}
        >
          Checkout
        </button>
   
        <button className="button is-white" onClick={() => {clearCart()}}>
          Clear{" "}
        </button>
      </div>
    
    </div>
  );
};

export default withRouter(Total);