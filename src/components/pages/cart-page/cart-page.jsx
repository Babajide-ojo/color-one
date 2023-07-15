import React, { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../shared/layout";
import CartItems from "./cart-items";
import "./cart-page.styles.scss";
import Total from "./total";

const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart} = useContext(CartContext);
  const funcs = {increase, decrease, removeProduct};
  return (
    <Layout>
    <CartItems />
    </Layout>
  );
};
export default CartPage;
