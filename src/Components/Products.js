import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import useFetch from "./useFetch";
import CategoriesTitles from "./CategoriesTitles";

const Products = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const { data: products, isLoading } = useFetch(
    `${process.env.REACT_APP_API_URL}/products/`
  );

  // products.sort(() => Math.random() - 0.5);
  const popularProducts = products.slice(0, 14);

  return (
    <div>
      <CategoriesTitles title={"Trending Products"} />
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
          {popularProducts.map((product) => (
            <ProductCard
              handleNavigate={() => handleNavigate(product._id)}
              key={product._id}
              imageLink={product.imageLink}
              productPrice={product.price}
              productTitle={product.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
