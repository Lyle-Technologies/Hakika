const CategoryImageContainer = ({ imageLink, alt, categoryTitle }) => {
  const imageStyle = {
    borderRadius: "9px",
    width: "93%",
    maxWidth: "100%",
  };

  return (
    <>
      <img
        className={"img-fluid shadow mb-2 m-2"}
        style={imageStyle}
        src={imageLink}
        alt={"sample"}
      />
      <p className={"text-center"}>{categoryTitle}</p>
    </>
  );
};

export default CategoryImageContainer;
