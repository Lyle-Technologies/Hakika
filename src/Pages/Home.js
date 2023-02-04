import TopNav from "../Components/TopNav";
import Search from "../Components/Search";
import { FiShoppingCart } from "react-icons/fi";

const Home = () => {
  const shoppingCart = {
    backgroundColor: "#F58634",
    color: "#fff",
    borderRadius: "9px",
    width: "13%",
    padding: "2.4%",
    fontSize: "2.9rem",
  };

  return (
    <div>
      <TopNav />
      <div className={"d-flex justify-content-around mt-3"}>
        <Search placeholder={`Search`} />

        <FiShoppingCart style={shoppingCart} />
      </div>
    </div>
  );
};

export default Home;
