import CategoriesTitles from "./CategoriesTitles";
import CategoryImages from "./CategoryImages";

const CategoriesSection = () => {
  return (
    <section id={"categories"} className={"mt-3"}>
      <CategoriesTitles title={"Categories"} />
      <CategoryImages />
      <CategoriesTitles title={"Promotions"} />
      <CategoriesTitles title={"Popular"} />
    </section>
  );
};

export default CategoriesSection;
