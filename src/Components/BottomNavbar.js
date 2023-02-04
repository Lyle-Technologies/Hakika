import { GrHomeRounded } from "react-icons/gr";

const BottomNavbar = () => {
  return (
    <nav className={"navbar navbar-expand-sm fixed-bottom bottomNavbar"}>
      <div className={"container-fluid"}>
        <ul className={"navbar-nav flex-row"}>
          <li className={"nav-item"}>
            <GrHomeRounded />
          </li>
          <li className={"nav-item"}>
            <GrHomeRounded />
          </li>
          <li className={"nav-item"}>
            <GrHomeRounded />
          </li>
          <li className={"nav-item"}>
            <GrHomeRounded />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNavbar;
