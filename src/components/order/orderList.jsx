import React, { useEffect, useState } from "react";
import "./order.styles.scss";
import axios from "axios";
import { withRouter } from "react-router";
import dateFormat from 'dateformat';

const Orders = ({history: {push}}) => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user-details"));
  const email = user?.email;

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`${process.env.REACT_APP_API_URL}/v3/order/singleOrder?email=${email}`)
        .then((data) => {
          setOrders(data?.data?.order);
        })
        .catch();
    }
    fetchData();
  }, []);

  const orderDetails = (id) => {
    push(`/single/${id}`)
  };

  return (
    <>
      <div className="order-header">
        {" "}
        <svg
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="package"
          class="order-icon"
          name="package"
        >
          <path
            d="M4.1502 9.32495C4.05962 9.48052 4.01216 9.65743 4.0127 9.83745V22.1625C4.01366 22.3405 4.06154 22.5151 4.15152 22.6687C4.24149 22.8224 4.37039 22.9495 4.5252 23.0375L15.5252 29.225C15.674 29.3086 15.8421 29.3517 16.0127 29.35L16.1377 16L4.1502 9.32495V9.32495Z"
            fill="black"
            opacity="0.2"
          ></path>
          <path
            d="M28.7498 8.84999H28.7373C28.5578 8.54571 28.3041 8.29196 27.9998 8.11249L16.9998 1.89999C16.6995 1.73364 16.3618 1.64636 16.0185 1.64636C15.6752 1.64636 15.3376 1.73364 15.0373 1.89999L4.03729 8.08749C3.7267 8.26296 3.46797 8.51738 3.28729 8.82499C3.28729 8.82663 3.28697 8.82825 3.28634 8.82977C3.28571 8.83129 3.28479 8.83266 3.28363 8.83382C3.28247 8.83499 3.28109 8.83591 3.27958 8.83653C3.27806 8.83716 3.27644 8.83749 3.27479 8.83749V8.86249C3.09978 9.15737 3.00899 9.4946 3.01229 9.83749V22.1625C3.01293 22.5188 3.10815 22.8686 3.28824 23.176C3.46832 23.4835 3.72682 23.7376 4.03729 23.9125L15.0373 30.1C15.3142 30.2511 15.6221 30.3366 15.9373 30.35H16.1123C16.4232 30.3347 16.7266 30.2492 16.9998 30.1L27.9998 23.9125C28.3071 23.7351 28.5624 23.48 28.7401 23.1729C28.9178 22.8658 29.0116 22.5173 29.0123 22.1625V9.83749C29.0141 9.49084 28.9235 9.14997 28.7498 8.84999V8.84999ZM16.0123 3.64999L25.9873 9.24999L22.1498 11.425L12.0748 5.86249L16.0123 3.64999ZM16.1248 14.85L6.06229 9.24999L10.0248 7.02499L20.1123 12.5875L16.1248 14.85ZM5.01229 10.95L15.1248 16.5875L15.0248 27.8L5.01229 22.1625V10.95ZM17.0248 27.7875L17.1248 16.5875L21.1373 14.3V19.0625C21.1373 19.3277 21.2427 19.5821 21.4302 19.7696C21.6177 19.9571 21.8721 20.0625 22.1373 20.0625C22.4025 20.0625 22.6569 19.9571 22.8444 19.7696C23.0319 19.5821 23.1373 19.3277 23.1373 19.0625V13.1625L27.0123 10.9625V22.1625L17.0248 27.7875Z"
            fill="black"
          ></path>
        </svg>
        <h1 className="order-page-title">Orders</h1>
      </div>
      {orders?.length === 0 ? (
        <div className="cart-section">
          {" "}
          <div className="empty-cart">You have no orders yet</div>
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
          <div className="order-page">
            <div className="cart-item-container">
              <div className="order-list-head">
                {" "}
                <div className="order_num_head">
                  <p>ORDER NUMBER</p>
                </div>
                <div className="order_mtd_head">
                  <p>PAYMENT METHOD</p>
                </div>
                <div className="order_status_head">
                  <p>STATUS</p>
                </div>
                <div className="order_price_head ">
                  <p>TOTAL</p>
                </div>
                <div className="order_price_head ">
                  <p>ORDER DATE</p>
                </div>
              </div>
              {orders.map((item) => (
                <div key={item._id} className="order-list">
                  <div
                    className="order-list-items"
                    onClick={() => {
                      orderDetails(item._id);
                    }}
                  >
                    {" "}
                    <div className="order_num">
                      <p className="ord_number">{item.order_number}</p>
                    </div>
                    <div className="order_mtd">
                      <p>{item.payment_method}</p>
                    </div>
                    <div className="order_status">
                      <p className="order_status_details">{item.status}</p>
                    </div>
                    <div className="order_price">
                      <p>{item.total_price}</p>
                    </div>
                    <div className="order_price">
                      <p> {dateFormat(item.date, "mmmm dS, yyyy") }</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default withRouter(Orders);
