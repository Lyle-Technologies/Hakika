import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import useFetch from "./useFetch";

const Products = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://hakika-online-store-api.onrender.com/api/products");

  products.sort(() => Math.random() - 0.5);

  return (
    <>
      {isLoading ? (
        <div className="rotatingIconHomePage">
          <RotatingLines
            strokeColor="#f58634"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
         </div>
      ) : (
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
      )}
    </>
  );
};

export default Products;
