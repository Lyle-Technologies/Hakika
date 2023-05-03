import BottomNavbar from "../Components/BottomNavbar";
import { FiShoppingCart } from "react-icons/fi";
import AccountDetails from "../Components/AccountDetails";
import { BiHeart } from "react-icons/bi";
import { MdOutlineFeedback } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import SettingDetails from "../Components/SettingDetails";

const AccountPage = () => {
  return (
    <section id="accountPage">
      <div className="accountInfo p-4 d-flex justify-content-between align-items-center">
        <div className="nameSection">
          <h3>Account</h3>
          <p id="userName">Welcome Back Kristin!</p>
          <p className="text-white">mfaithesther@gmail.com</p>
        </div>
        <FiShoppingCart style={{ color: "white", fontSize: "1.7rem" }} />
      </div>
      <div className="p-4">
        <h6 className="mb-4">MY HAKIKA ACCOUNT</h6>
        <div className="accountCard p-4">
          <AccountDetails
            icon={<IoMdContact style={{ marginRight: "20px" }} />}
            title={"Personal Details"}
          />
          <AccountDetails
            icon={<MdOutlineFeedback style={{ marginRight: "20px" }} />}
            title={"Feedback"}
          />
          <AccountDetails
            icon={<BiHeart style={{ marginRight: "20px" }} />}
            title={"Saved Items"}
          />
          <AccountDetails
            icon={<AiOutlineClockCircle style={{ marginRight: "20px" }} />}
            title={"Recently Viewed"}
          />
        </div>
      </div>
      <div className="hakikaSettingsSection p-4">
        <h6 className="mb-4">MY SETTINGS</h6>
        <div className="accountCard p-4">
          <SettingDetails title={"Address Book"} />
          <SettingDetails title={"Delete my account permanently"} />
          <SettingDetails title={"Logout"} />
        </div>
      </div>
      <BottomNavbar />
    </section>
  );
};

export default AccountPage;
