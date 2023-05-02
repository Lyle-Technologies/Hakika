import { useNavigate } from "react-router-dom";

const PromotionCard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/post-add");
  };

  return (
    <div
      className={"d-flex justify-content-between badgeColor"}
      style={{
        width: "90%",
        height: "150px",
        margin: "auto",
        boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
      }}
    >
      <div className={"p-3 w-50"}>
        <h5 className="text-white">Got something to sell?</h5>
        <p>Post an advert for free!!</p>
      </div>
      <img
        onClick={handleNavigate}
        style={{
          width: "40%",
          height: "100%",
          maxWidth: "100%",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          backgroundColor: "white",
        }}
        className={"img-fluid"}
        alt={"promotion card"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1682938322/Hakika%20Ecommerce/uploadIcon-removebg-preview_lu4qdm.png"
        }
      />
    </div>
  );
};

export default PromotionCard;
