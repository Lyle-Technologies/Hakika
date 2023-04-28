import { SlOptions } from "react-icons/sl";
import { FcLikePlaceholder } from "react-icons/fc";

const ProductCard = ({
  imageLink,
  productTitle,
  productPrice,
  handleNavigate,
}) => {
  return (
    <div className={"productCard mb-5"} onClick={handleNavigate}>
      <div className={"d-flex justify-content-between p-2"}>
        <SlOptions />
        <FcLikePlaceholder />
      </div>
      <div>
        <img
          className={"img-fluid"}
          src={imageLink}
          alt={"sample"}
        />

        <div className={"p-2"}>
          <p className={"boldweight"}>{productTitle}</p>
          <p>Ksh {productPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
