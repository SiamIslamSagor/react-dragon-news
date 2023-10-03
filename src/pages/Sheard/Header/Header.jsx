import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-gray-500 text-[18px]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl text-[20px]">
        {moment().format("dddd,")}{" "}
        <span className="text-gray-500">{moment().format("MMMM D, YYYY")}</span>
      </p>
    </div>
  );
};

export default Header;
