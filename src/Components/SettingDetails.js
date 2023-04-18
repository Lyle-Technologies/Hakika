import { AiOutlineRight } from "react-icons/ai";

const SettingDetails = ({ title }) => {
  return (
    <div className="accountDetails d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex justify-content-around align-items-center">
        <p className="m-auto">{title}</p>
      </div>
      <AiOutlineRight />
    </div>
  );
};

export default SettingDetails;
