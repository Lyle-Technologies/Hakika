import { BiBell } from "react-icons/bi";

const TopNav = () => {
  return (
    <div
      className={
        "d-flex align-items-center justify-content-around mt-1 fontFamily"
      }
    >
      <img
        className={"img-fluid banner iconStyles"}
        alt={"Logo"}
        src={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1675457492/Hakika%20Ecommerce/logo_mydltj.png"
        }
      />
      <div className={"mt-3"}>
        <h5>
          <b>Discover</b>
        </h5>
        <p>Find anything you want</p>
      </div>
      <BiBell className={"iconStyles"} />
    </div>
  );
};

export default TopNav;