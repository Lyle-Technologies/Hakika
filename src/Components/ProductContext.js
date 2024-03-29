import React, { createContext } from "react";
import useFetch from "./useFetch";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const { data: products } = useFetch(
    `${process.env.REACT_APP_API_URL}/products/`
  );
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};
