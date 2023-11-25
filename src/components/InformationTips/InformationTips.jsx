import "./InformationTips.css";
import { IoMdInformationCircle } from "react-icons/io";

const InformationTips = ({ children, ...props }) => {
  return (
    <div className="infomation-container">
      <div className="information-icon">
        <IoMdInformationCircle size="25px" />
      </div>

      <div className="infomation-toggle">{children}</div>
    </div>
  );
};

export default InformationTips;
