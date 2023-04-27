import React, { createContext } from "react";
import useFetch from "./useFetch";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const { data: products } = useFetch(
    "https://hakika-online-store-api.onrender.com/api/products"
  );
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};
