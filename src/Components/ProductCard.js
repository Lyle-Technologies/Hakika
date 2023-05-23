const ProductCard = ({
  imageLink,
  productTitle,
  productPrice,
  handleNavigate,
}) => {
  return (
    <div className={"productCard mb-5"} onClick={handleNavigate}>
      <img className={"img-fluid"} src={imageLink} alt={"sample"} />

      <div className={"p-2"}>
        <p className={"boldweight"}>{productTitle}</p>
        <p className="boldweight" style={{ color: "#f58634" }}>
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
