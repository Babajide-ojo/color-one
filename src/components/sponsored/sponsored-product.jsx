import React, { useContext } from "react";
import { isInCart } from "../../helpers";
import { withRouter } from "react-router";
import { CartContext } from "../../context/cart-context";
import "../featured-collection/featured-collection.jsx";
import "./sponsored-product.styles.scss";
const SponsoredProduct = (props) => {
  const { name, image_url, price, history, _id, description } = props;
  const product = { name, image_url, price, _id, description };

  return (
    <div
      className="sponsored-product"
      onClick={() => history.push(`/product/${_id}`)}
    >
      <div className="sponsored-image">
        <img src={image_url} alt="product" />
      </div>
    </div>
  );
};

export default withRouter(SponsoredProduct);
