import CategoryImageContainer from "./CategoryImageContainer";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const CategoryImages = () => {
  const navigate = useNavigate();

  const { data: category } = useFetch(
    `${process.env.REACT_APP_API_URL}/categories`
  );

  const handleNavigate = (id) => {
    navigate(`/category/${id}/products`);
  };

  return (
    <div
      className={
        "d-flex imageScrollable overflow-scroll categoryImageContainer"
      }
    >
      {category.map((image) => (
        <div key={image._id} className={"col-4 categoryImages"}>
          <CategoryImageContainer
            handleNavigate={() => handleNavigate(image._id)}
            imageLink={image.categoryImageLink}
            categoryTitle={image.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryImages;
