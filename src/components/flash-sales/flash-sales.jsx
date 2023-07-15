import React, { useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import CountdownTimer from "react-component-countdown-timer";
import FlashSalesProduct from "./flash-sales-item";
import "./flash-sales.styles.scss";
import Countdown from "react-countdown";
import Loader from "../loading/loader";
const FlashSales = () => {
  const { products } = useContext(ProductsContext);

  let productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FlashSalesProduct {...product} key={product.id} />);

  if (products.length === 0) {
    productItems = <Loader />;
  }
  return (
    <div className="flash-sales-coll">
      <div className="flash-sales-coll-title">
        {" "}
        <h2> Flash Sales</h2>
        {/* <CountdownTimer count={5432} border showTitle noPoints /> */}
      </div>
      <div className="products">{productItems}</div>
    </div>
  );
};

export default FlashSales;
