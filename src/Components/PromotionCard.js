const PromotionCard = () => {
  return (
    <div
      className={"d-flex justify-content-between badgeColor"}
      style={{
        width: "90%",
        margin: "auto",
        boxShadow: "1px 1px 4px #000000",
        borderRadius: "10px",
      }}
    >
      <div className={"p-3"}>
        <h6>New Release</h6>
        <p className={"boldweight"}>Nike Air Max 20</p>
        <h6 className={"boldweight"}>Limited edition</h6>
        <button
          className={"btn bg-white boldweight"}
          style={{ color: "#F58634" }}
        >
          Buy Now
        </button>
      </div>
      <img
        style={{
          width: "45%",
          maxWidth: "100%",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        className={"img-fluid"}
        alt={"promotion card"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/c_scale,h_640,w_640/v1675512490/Hakika%20Ecommerce/pexels-melvin-buezo-2529148_ezkenl.jpg"
        }
      />
    </div>
  );
};

export default PromotionCard;
