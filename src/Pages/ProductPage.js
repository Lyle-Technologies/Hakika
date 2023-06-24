import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import useFetch from "../Components/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import ProductDetail from "../Components/ProductDetail";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDescription, setShowDescription] = useState(true);

  const handleGoBack = () => {
    navigate(-1);
  };

  const { data: products, isLoading } = useFetch(
    `https://hakika-online-store-api.onrender.com/api/products/${id}`
  );

  return (
    <section className="productPageSection">
      <div className="d-flex justify-content-between productPageSectionIcons">
        <AiOutlineLeft onClick={handleGoBack} />
        <BiMenuAltRight />
      </div>
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
        <div>
          <img
            id="productImage"
            className="img-fluid w-100"
            src={products.imageLink}
            alt="product"
          />
          <div className="p-3">
            <ProductDetail name={products.name} price={products.price} />
            <div className="descriptionSection">
              <div className="headings d-flex justify-content-between mt-5">
                <p
                  className={showDescription ? "bottom" : ""}
                  onClick={() => setShowDescription(true)}
                >
                  Description
                </p>
                <p
                  className={showDescription ? "" : "bottom"}
                  onClick={() => setShowDescription(false)}
                >
                  Reviews
                </p>
              </div>
              <div className="reviewsSection mt-1">
                {showDescription ? (
                  <p>{products.description}</p>
                ) : (
                  <p>Reviews</p>
                )}
              </div>
            </div>
            <div className="buttonSection d-flex justify-content-between mt-5">
              <button
                className="btn w-40"
                style={{ border: "2px solid #f58634", color: "#f58634" }}
              >
                Add to Cart
              </button>
              <button className="btn themeColor text-white w-50">Call</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;
