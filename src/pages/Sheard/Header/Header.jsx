import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p className="text-xl">
        {moment().format("dddd,")}{" "}
        <span className="text-gray-500">{moment().format("MMMM D, YYYY")}</span>
      </p>
    </div>
  );
};

export default Header;
