const ProductCard = ({
  imageLink,
  productTitle,
  productPrice,
  handleNavigate,
}) => {
  return (
    <div className={"productCard card mb-5"} onClick={handleNavigate}>
      <img
        className={"img-fluid card-img-top"}
        src={imageLink}
        alt={"sample"}
        loading={"lazy"}
      />

      <div className={"p-2"}>
        <p className={"boldweight"}>{productTitle}</p>
        <p className="boldweight card-text" style={{ color: "#f58634" }}>
          {productPrice.toLocaleString("en-KE", {
            style: "currency",
            currency: "KES",
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
