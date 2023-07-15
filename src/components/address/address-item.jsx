import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const AddressItem = (props) => {
  const { id, title, price} = props;
  //const [btnState, setBtnState] = useState(false);
  return (
    <div className="">
      <div className="add-row ">
        <div className="add-row-item">{id}</div>
        <div className="add-row-item">{title}</div>
        <div className="add-row-item">{price}</div>
        <div className="add-row-item">
          <button
            className="btn btn-sm add-btn"
            onClick={() => {
             localStorage.setItem("delivery-location",title);
             localStorage.setItem("delivery-price", price);
             localStorage.setItem("btn-disabled", false);

            }}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressItem;
