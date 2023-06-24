import { IoMdContact } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/profile");
  };

  return (
    <div
      className={
        "d-flex align-items-center justify-content-between fontFamily fixed-top topNav"
      }
    >
      <img
        className={"img-fluid banner iconStyles"}
        alt={"Logo"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1684785219/Hakika%20Ecommerce/hakikaLogo_bove2r.png"
        }
      />
      <div>
        <p>Find anything you want</p>
      </div>
      <IoMdContact className="iconStyles" onClick={handleNavigate} />
    </div>
  );
};

export default TopNav;
