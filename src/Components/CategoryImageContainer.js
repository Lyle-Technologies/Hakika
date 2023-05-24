const CategoryImageContainer = ({
  imageLink,
  alt,
  categoryTitle,
  handleNavigate,
}) => {
  return (
    <>
      <img
        onClick={handleNavigate}
        className={"img-fluid shadow categoryPicture mb-2 m-2"}
        src={imageLink}
        alt={"sample"}
      />
      <p onClick={handleNavigate} className={"text-center"}>
        {categoryTitle}
      </p>
    </>
  );
};

export default CategoryImageContainer;
