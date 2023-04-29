const PromotionCard = () => {
  return (
    <div
      className={"d-flex justify-content-between badgeColor"}
      style={{
        width: "80%",
        margin: "auto",
        boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
      }}
    >
      <div className={"p-3"}>
        <h5 className="text-white">Got something to sell?</h5>
        <p>Post an advert for free!!</p>
      </div>
      <img
        style={{
          width: "45%",
          height: "auto",
          maxWidth: "100%",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        className={"img-fluid"}
        alt={"promotion card"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/c_scale,h_400,w_400/v1682718254/Hakika%20Ecommerce/download_sign32_dqvsnr.jpg"
        }
      />
    </div>
  );
};

export default PromotionCard;
