import CategoryImageContainer from "./CategoryImageContainer";

const CategoryImages = () => {
  const images = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dogmqg8to/image/upload/v1675475898/Hakika%20Ecommerce/pexels-garrett-morrow-1649771_lweecs.jpg",
      name: "Electronics",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dogmqg8to/image/upload/c_scale,h_640,w_640/v1675474759/Hakika%20Ecommerce/skincare_g4tfmc.jpg",
      name: "Skin Care",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dogmqg8to/image/upload/v1675474759/Hakika%20Ecommerce/food_lnnkiz.jpg",
      name: "Food",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dogmqg8to/image/upload/c_scale,h_640,w_640/v1675474759/Hakika%20Ecommerce/clothes_jyjphr.jpg",
      name: "Clothes",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dogmqg8to/image/upload/c_scale,h_640,w_640/v1675476433/Hakika%20Ecommerce/pexels-lisa-fotios-1092644_dyyqse.jpg",
      name: "Phones",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dogmqg8to/image/upload/c_scale,h_640,w_640/v1675476887/Hakika%20Ecommerce/pexels-pixabay-280471_kclket.jpg",
      name: "Furniture & Appliances",
    },
  ];

  return (
    <div className={"d-flex imageScrollable overflow-scroll"}>
      {images.map((image) => (
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
