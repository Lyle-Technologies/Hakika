import TopNav from "../Components/TopNav";
import Search from "../Components/Search";
import { FiShoppingCart } from "react-icons/fi";
import CategoriesSection from "../Components/CategoriesSection";
import BottomNavbar from "../Components/BottomNavbar";

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
    <section id="homePage">
      <TopNav />
      <div className={"d-flex justify-content-around mt-3"}>
        <Search placeholder={`Search`} />
        <FiShoppingCart style={shoppingCart} />
      </div>
      <CategoriesSection />
      <BottomNavbar />
    </section>
  );
};

export default Home;
