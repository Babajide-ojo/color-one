import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../../context/products-context";
import { CartContext } from "../../../context/cart-context";



const Product = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);

  const { _id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => item._id === _id);
    if (!product) {
      return push("/admin/product");
    }
    setProduct(product);
  }, [_id, product, push, products]);

  if (!product) {
    return null;
  }
  const { image_url, name, price, description } = product;

  return (
 
      <div className="single-product-container">
        <div className="product-image">
          <img src={image_url} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{name}</h3>
            <p>₦ {price}</p>
          </div>
          <div className="add-to-cart-btns">
       

            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="product-description">
            <p className="pd-title">Product Description</p>
            <p>
              {/* {description} */}
              When it comes to Italian tailoring, this is the ultimate
              combination of classic heritage and elegant masculinity. This suit
              features slim cut trousers that just hit the ankle.. Made in
              Italy. When it comes to Italian tailoring this is the ultimate
              combination of classic heritage and elegant masculine suit that
              will make you feel better at any given time. Patronize us today
              and make different.
            </p>
          </div>
        </div>
      </div>

  );
};

export default Product;
