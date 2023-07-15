import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import Layout from "../shared/layout";
import "./checkout.styles.scss";
import CartItem from "../pages/cart-page/cart-item";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({ history }) => {
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
  const user = JSON.parse(localStorage.getItem("user-details"));
  const [btnActive, setBtnActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone_number, setPhoneNumber] = useState("");
  const toastMsg = (message) => toast(message);

  const placeOrderBtn = () => {
    document.getElementById("place-order-stn").style.display = "block";
  };

  const orderDetails = (e) => {
    const grand_price =
      total + parseInt(localStorage.getItem("delivery-price"));
    const data = {
      total_price: grand_price,
      items: cartItems,
      delivery_address: localStorage.getItem("delivery-location"),
      delivery_price: localStorage.getItem("delivery-price"),
      status: "delivered",
      email: user?.email,
      payment_method: "Payment On Delivery",
      phone_number,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/v3/order/add`, data)
      .then((data) => {
        toastMsg(data?.data?.msg);
        document.getElementById("phone-number").value = "";
        setLoading(false);
      })
      .catch((error) => {
        toastMsg(error?.response?.data?.msg);
        console.log(error);
      });
  };

  const placeOrder = () => {};
  return (
    <Layout>
      <ToastContainer />
      <>
        <h1 className="checkout-header">Checkout Summary</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your Cart is empty</div>
        ) : (
          <>
            <div className="delivery-address-div"></div>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItem {...item} key={item._id} {...funcs} />
                ))}
              </div>
              <div className="checkout">
                <div className="order-details">
                  <div className="order-summary">Order Summary</div>
                  <div className="item-count">
                    {itemCount === 1 ? (
                      <div>{itemCount} item</div>
                    ) : (
                      <div>{itemCount} items</div>
                    )}
                  </div>
                </div>

                <div className="order-details-item">
                  <div className="order-summary-item">Sub Total:</div>
                  <div className="item-count-item">₦ {total}</div>
                </div>
                <div className="payment-button">
                  {localStorage.getItem("delivery-location") ? (
                    <div>
                      <div className="order-details-item">
                        <div className="order-summary-item">
                          Delivery Charges:
                        </div>
                        <div className="item-count-item">
                          ₦ {localStorage.getItem("delivery-price")}
                        </div>
                      </div>
                      <div className="order-details-item">
                        <div className="order-summary-item">
                          Delivery Location:
                        </div>
                        <div className="item-count-item">
                          {localStorage.getItem("delivery-location")}
                        </div>
                      </div>
                      <div className="order-details" id="total-summary">
                        <div className="order-summary">Total:</div>
                        <div className="item-count">
                          ₦{" "}
                          {total +
                            parseInt(localStorage.getItem("delivery-price"))}
                        </div>
                      </div>
                      <button
                        className="btn "
                        onClick={() => history.push("/address")}
                      >
                        Change Location
                      </button>
                      <button
                        className="button is-black"
                        onClick={() => {
                          history.push("/payment");
                        }}
                        disabled={btnActive}
                      >
                        Pay Now
                      </button>
                      <button
                        className="button is-black"
                        onClick={() => {
                          placeOrderBtn();
                        }}
                      >
                        Pay on Delivery
                      </button>
                      <div id="place-order-stn">
                        <p className="phone-num">
                          Please enter a VALID phone number
                        </p>{" "}
                        <input
                          type="number"
                          class="form-control"
                          id="phone-number"
                          name="phone_number"
                          required
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                        <button
                          className="button is-black"
                          id="place-order-btn"
                          type="submit"
                          onClick={() => {
                            if (
                              phone_number === "" ||
                              phone_number.length < 11
                            ) {
                              alert("Please enter a VALID phone number");
                            }
                            orderDetails();
                          }}
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="button select-delivery"
                      onClick={() => {
                        history.push("/address");
                      }}
                    >
                      Select Delivery Adddress
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default Checkout;
