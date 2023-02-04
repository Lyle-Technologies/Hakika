import { SlOptions } from "react-icons/sl";
import { FcLikePlaceholder } from "react-icons/fc";

const ProductCard = ({ imageLink, productTitle, productPrice }) => {
  return (
    <div className={"productCard mb-5"}>
      <div className={"d-flex justify-content-between p-2"}>
        <SlOptions />
        <FcLikePlaceholder />
      </div>
      <img
        style={{ width: "100%", height: "170px", maxWidth: "100%" }}
        className={"img-fluid"}
        src={imageLink}
        alt={"sample"}
      />

      <div className={"p-2"}>
        <p className={"boldweight"}>{productTitle}</p>
        <p>Ksh {productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
