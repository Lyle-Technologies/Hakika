import CategoryImageContainer from "./CategoryImageContainer";
import useFetch from "./useFetch";

const CategoryImages = () => {
  // useEffect(() => {
  //   fetch("http://localhost:8000/categories")
  //     .then((res) => res.json())
  //     .then((data) => setGategory(data));
  // }, []);

  const { data: category } = useFetch("http://localhost:8000/categories");

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
