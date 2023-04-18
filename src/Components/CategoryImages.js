import CategoryImageContainer from "./CategoryImageContainer";
import useFetch from "./useFetch";

const CategoryImages = () => {
  const { data: category } = useFetch("http://localhost:3004/categories");

  return (
    <div className={"d-flex imageScrollable overflow-scroll"}>
      {category.map((image) => (
        <div key={image.id} className={"col-4"}>
          <CategoryImageContainer
            imageLink={image.image}
            categoryTitle={image.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryImages;
