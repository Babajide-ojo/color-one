import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
//this create and export a product context
export const OrdersContext = createContext();

const OrdersContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/v3/product/all`
      );
      setOrders(data);
    }
    fetchData();
  }, []);
  return (
    <OrdersContext.Provider value={{ orders }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
