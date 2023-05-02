import React from "react";
const ProductDetail = ({ name, price }) => {
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <p className="boldweight" style={{ color: "#f58634" }}>
        Ksh {price}.00
      </p>
    </React.Fragment>
  );
};

export default ProductDetail;
