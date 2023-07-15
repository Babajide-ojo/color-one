import React, { useContext } from "react";
import { isInCart } from "../../helpers";
import { withRouter } from "react-router";
import { CartContext } from "../../context/cart-context";
import "./featured-product.styles.scss";
const FeaturedProduct = (props) => {
  const { name, image_url, price, history, _id, description } = props;
  const product = { name, image_url, price, _id, description };

  const { addProduct, cartItems, increase } = useContext(CartContext);
  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${_id}`)}
      >
        <img src={image_url} alt="product" />
      </div>
      <div className="name-price">
        <h3>{name}</h3>
        <p>₦ {price}</p>
        {!isInCart(product, cartItems) && (
          <button
            className="button is-black nomad-btn"
            onClick={() => addProduct(product)}
          >
            ADD TO CART
          </button>
        )}
        {isInCart(product, cartItems) && (
          <button
            className="button is-white nomad-btn"
            id="btn-white-outline"
            onClick={() => {increase(product)}}
          >
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
