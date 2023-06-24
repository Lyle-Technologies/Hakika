import CategoryImages from "./CategoryImages";
import { FaGreaterThan } from "react-icons/fa";
import Products from "./Products";
import PromotionCard from "./PromotionCard";

const CategoriesSection = () => {
  return (
    <section id={"categories"}>
      <div className={"d-flex justify-content-around categoriesViewAll"}>
        <h3 className={"boldweight"}>Categories</h3>
        <p style={{ color: "#F58634" }}>
          view all
          <span style={{ marginLeft: "10px" }}>
            <FaGreaterThan />
          </span>
        </p>
      </div>
      <div className="categoryProductSection">
        <CategoryImages />
        <div className="productsPromotionSection">
          <PromotionCard />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
