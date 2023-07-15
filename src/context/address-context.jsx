import React, { createContext, useState } from "react";
import ADDRESS_DATA from "../shop/address";

export const AddressContext = createContext();

//create the address context provider
const AddressContextProvider = ({ children }) => {
  const [addresses] = useState(ADDRESS_DATA);

  return (
    <AddressContext.Provider value={{ addresses }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressContextProvider;
