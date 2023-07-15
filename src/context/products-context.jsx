import React, { createContext, useState, useEffect } from "react";

import axios from "axios";
require('dotenv').config();

export const ProductsContext = createContext();

//create the product context provider
const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/v3/product/all`
      );
      setProducts(data);
    }
    fetchData();
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
