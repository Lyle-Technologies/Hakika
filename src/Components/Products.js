import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const products = useContext(ProductContext);

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={"d-flex justify-content-around flex-wrap"}>
      {products.map((product) => (
        <ProductCard
          handleNavigate={() => handleNavigate(product._id)}
          key={product._id}
          imageLink={product.imageLink}
          productPrice={product.price}
          productTitle={product.name}
        />
      ))}
    </div>
  );
};

export default Products;
