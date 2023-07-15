import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import SponsoredProduct from "../sponsored/sponsored-product";
import "./featured-collection.styles.scss";

import Loader from "../loading/loader";

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);

  let productItems = products
    .filter((product, i) => i < 6)
    .map((product) => <SponsoredProduct {...product} key={product.id} />);
  if (products.length === 0) {
    productItems = <Loader />;
  }
  return (
    <div className="featured-collection">
      <h2 className="featured-collection-title">Featured Product</h2>

      <div className="products">{productItems}</div>
    </div>
  );
};

export default FeaturedCollection;
