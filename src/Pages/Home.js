import TopNav from "../Components/TopNav";
// import { FiShoppingCart } from "react-icons/fi";
import CategoriesSection from "../Components/CategoriesSection";
import BottomNavbar from "../Components/BottomNavbar";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <section id="homePage">
      <TopNav />
      <Banner />
      <CategoriesSection />
      <BottomNavbar />
    </section>
  );
};

export default Home;
