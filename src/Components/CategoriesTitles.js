const CategoriesTitles = ({ title }) => {
  return (
    <>
      <div className={"d-flex justify-content-between p-2"}>
        <h3 className={"boldweight"}>{title}</h3>
        <p className={"badge badgeColor"}>see more</p>
      </div>
    </>
  );
};

export default CategoriesTitles;
