const CategoriesTitles = ({ title }) => {
  return (
    <>
      <div className={"d-flex justify-content-around"}>
        <h2 className={"boldweight"}>{title}</h2>
        <p className={"badge badgeColor"}>see more</p>
      </div>
    </>
  );
};

export default CategoriesTitles;
