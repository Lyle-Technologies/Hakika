import CategoryImageContainer from "./CategoryImageContainer";
import useFetch from "./useFetch";

const CategoryImages = () => {
  const { data: category } = useFetch(
    "https://hakika-online-store-api.onrender.com/api/categories"
  );

  return (
    <div className={"d-flex imageScrollable overflow-scroll"}>
      {category.map((image) => (
        <div key={image._id} className={"col-4"}>
          <CategoryImageContainer
            imageLink={image.categoryImageLink}
            categoryTitle={image.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryImages;
