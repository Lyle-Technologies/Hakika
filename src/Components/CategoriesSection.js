import CategoriesTitles from "./CategoriesTitles";
import CategoryImages from "./CategoryImages";
import { FaGreaterThan } from "react-icons/fa";
import PromotionsSection from "./PromotionsSection";
import Products from "./Products";

const CategoriesSection = () => {
  return (
    <section id={"categories"} className={"mt-4"}>
      <div className={"d-flex justify-content-around"}>
        <h2 className={"boldweight"}>Categories</h2>
        <p style={{ color: "#F58634" }}>
          view all
          <span style={{ marginLeft: "10px" }}>
            <FaGreaterThan />
          </span>
        </p>
      </div>
      <CategoryImages />
      <CategoriesTitles title={"Promotions"} />
      <PromotionsSection />
      <CategoriesTitles title={"Popular"} />
      <Products />
      <h1>Pending....</h1>
    </section>
  );
};

export default CategoriesSection;
