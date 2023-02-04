import { GrHomeRounded } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

const BottomNavbar = () => {
  const bottomIcons = {
    fontSize: "1.2rem",
  };

  return (
    <nav className={"navbar navbar-expand-sm fixed-bottom bottomNavbar"}>
      <div className={"container-fluid"}>
        <ul className={"navbar-nav flex-row w-100 justify-content-between"}>
          <li className={"nav-item"}>
            <GrHomeRounded style={bottomIcons} />
          </li>
          <li className={"nav-item"}>
            <FiShoppingBag style={bottomIcons} />
          </li>
          <li className={"nav-item"}>
            <GoLocation style={bottomIcons} />
          </li>
          <li className={"nav-item"}>
            <IoMdContact style={bottomIcons} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNavbar;
