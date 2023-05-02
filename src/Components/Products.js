import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
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
        <div className="rotatingIcon">
          <Oval
            height={80}
            width={80}
            color="#13678A"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#13678A"
            strokeWidth={2}
            strokeWidthSecondary={2}
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
