import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import PaystackPop from "@paystack/inline-js";
import Layout from "../shared/layout";
import "./checkout.styles.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

const PaymentIntegration = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);

  const user = JSON.parse(localStorage.getItem("user-details"));
  const toastMsg = (message) => toast(message);
  const [phone_number, setPhoneNumber] = useState("");
  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_a14111be56de0380c681d515b897810f4fa22f69",
      amount: total * 100,
      email: user.email,
      firstname: user.first_name,
      lastname: user.last_name,
      onSuccess(transaction) {
        console.log("transaction", transaction);
        let message = `Payment Complete! Reference ${transaction.reference}`;
        const grand_price =
          total + parseInt(localStorage.getItem("delivery-price"));
        const data = {
          total_price: grand_price,
          items: cartItems,
          delivery_address: localStorage.getItem("delivery-location"),
          delivery_price: localStorage.getItem("delivery-price"),
          status: "new",
          email: user?.email,
          payment_method: "Paid",
          phone_number,
        };
        axios
          .post(`${process.env.REACT_APP_API_URL}/v3/order/add`, data)
          .then((data) => {
           // toastMsg(data?.data?.msg);
            alert(message)
            document.getElementById("phone-number").value = "";
          })
          .catch((error) => {
            toastMsg(error?.response?.data?.msg);
            console.log(error);
          });
      },
      onCancel() {
        alert("You have canceled the transaction");
      },
    });
  };
  return (
    <Layout>
      {/* <ToastContainer /> */}
      <div action="">
        <div className="payment">
          <h3
            className="pay_num_item"
            aria-readonly
          >{`Total Items: ${itemCount}`}</h3>
          <h4 className="pay_num_amount">{`Amount to Pay: ${total}`}</h4>
          <div id="pay-now-stn">
            <p className="phone-num">Please enter a VALID phone number</p>{" "}
            <input
              type="number"
              class="form-control"
              id="phone-number-pay-now"
              name="phone_number"
              required
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <button
              className="button is-black nomad-btn submit paystack-payment-button"
              id="place-order-btn"
              type="submit"
              onClick={() => {
                if (phone_number === "" || phone_number.length < 11) {
                  alert("Please enter a VALID phone number");
                } else {
                  payWithPaystack();
                }
              }}
            >
              Place Order
            </button>
          </div>
          <div className="pay-btn-section">
            {/* <button
            type="submit"
            className="button is-black nomad-btn submit paystack-payment-button"
            onClick={payWithPaystack}
          >
            Make Payment
          </button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentIntegration;
