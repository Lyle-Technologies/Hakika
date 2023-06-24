import React, { createContext } from "react";
import useFetch from "./useFetch";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const { data: products } = useFetch("http://localhost:8000/api/products/");
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};
