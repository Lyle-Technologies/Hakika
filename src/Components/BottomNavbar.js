import { GrHomeRounded } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  const bottomIcons = {
    fontSize: "1.5rem",
  };

  return (
    <nav className={"navbar navbar-expand-sm fixed-bottom bottomNavbar p-2"}>
      <div className={"container-fluid"}>
        <ul className={"navbar-nav flex-row w-100 justify-content-between"}>
          <Link to={"/"}>
            <GrHomeRounded style={bottomIcons} />
          </Link>
          <li className={"nav-item"}>
            <FiShoppingBag style={bottomIcons} />
          </li>
          <li className={"nav-item"}>
            <GoLocation style={bottomIcons} />
          </li>
          <Link to={"/account"}>
            <IoMdContact style={bottomIcons} />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNavbar;
