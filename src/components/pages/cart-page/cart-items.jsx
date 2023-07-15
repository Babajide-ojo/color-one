import React, { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../shared/layout";
import CartItem from "./cart-item";
import "./cart-page.styles.scss";
import Total from "./total";

const CartItems = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };
  return (
    <>
      <h1 className="cart-page-icon">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="cart-section">
          {" "}
          <div className="empty-cart">Your Cart is empty</div>
          <div className="cart-img-div">
            <img
              className="cart-img"
              src="https://thumbs.dreamstime.com/b/trolley-shopping-cart-logo-icon-design-shop-symbol-vector-illustrations-161932537.jpg"
              alt="img"
            />{" "}
          </div>
        </div>
      ) : (
        <>
          <div className="cart-page">
            <div className="cart-item-container">
              {cartItems.map((item) => (
                <CartItem {...item} key={item._id} {...funcs} />
              ))}
            </div>
            <Total itemCount={itemCount} clearCart={clearCart} total={total} />
          </div>
        </>
      )}
    </>
  );
};
export default CartItems;
