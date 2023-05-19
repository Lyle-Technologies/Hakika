import TopNav from "../Components/TopNav";
// import { FiShoppingCart } from "react-icons/fi";
import CategoriesSection from "../Components/CategoriesSection";
import BottomNavbar from "../Components/BottomNavbar";

const Home = () => {
  return (
    <section id="homePage">
      <TopNav />
      <CategoriesSection />
      <BottomNavbar />
    </section>
  );
};

export default Home;
