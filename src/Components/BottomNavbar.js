import { GrHomeRounded } from "react-icons/gr";
import { BsBookmarkCheck } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const BottomNavbar = () => {
  const navigate = useNavigate();

  const handleNavigateToPostAdd = () => {
    navigate("/post-add");
  };

  const bottomIcons = {
    fontSize: "1.5rem",
    marginLeft: "10px",
  };

  return (
    <nav
      className={"navbar bottomNavbar navbar-expand-sm fixed-bottom bottomNavbar"}
    >
      <ul
        className={
          "navbar-nav flex-row w-100 justify-content-between align-items-center p-3"
        }
      >
        <Link to={"/"} className="">
          <GrHomeRounded style={bottomIcons} />
        </Link>
        <li className={"nav-item"}>
          <FiPlusSquare style={bottomIcons} onClick={handleNavigateToPostAdd} />
        </li>
        <li className={"nav-item"}>
          <BsBookmarkCheck style={bottomIcons} />
        </li>
        <Link to={"/profile"}>
          <IoMdContact style={bottomIcons} />
        </Link>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
