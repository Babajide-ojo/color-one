import React, { useContext } from "react";
import { withRouter } from "react-router";
import "./flash-sales.styles.scss";
const FlashSalesProduct = (props) => {
  const { name, image_url, price, history, _id, description } = props;
  const product = { name, image_url, price, _id, description };

  return (
    <div
      className="flash-sales-product"
      onClick={() => history.push(`/product/${_id}`)}
    >
      <div className="flash-sales-image">
        <img src={image_url} alt="product" />
      </div>
    </div>
  );
};

export default withRouter(FlashSalesProduct);
