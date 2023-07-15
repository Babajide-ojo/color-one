import React, { useContext, useState, useEffect } from "react";
import Layout from "../shared/layout";
import "./address-modal.styles.scss";
import { AddressContext } from "../../context/address-context";
import AddressItem from "./address-item";

const AddressModal = ({history}) => {
  const { addresses } = useContext(AddressContext);
  const [btnState, setBtnState] = useState(true);
  const allAddress = addresses.map((address) => (
    <AddressItem {...address} key={address.id} />
  ));
  return (
    <Layout>
      <div className="table-div">
        <div className="table-div-head">
          <div>Select delivery area</div>
          <div>
            <button className="btn btn-warning continue" disabled={btnState}   onClick={() => history.push("/checkout")}>
              Continue{" "}
            </button>
          </div>
        </div>
        <div className="add-row-head row">
          <div className="add-row-title col">S/No</div>
          <div className="add-row-title col">Location Area</div>
          <div className="add-row-title col">Price</div>
          <div className="add-row-title col">Action</div>
        </div>
        {addresses.map((address) => {
          return (
            <div key={address.id}>
              <div className="add-row">
                <div className="col add-row-item">{address.id}</div>
                <div className="col add-row-item">{address.title}</div>
                <div className="col add-row-item">{address.price}</div>
                <div className="col add-row-item">
                  <button
                    className="btn btn-sm add-btn"
                    onClick={() => {
                      localStorage.setItem("delivery-location", address.title);
                      localStorage.setItem("delivery-price", address.price);
                      setBtnState(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default AddressModal;
