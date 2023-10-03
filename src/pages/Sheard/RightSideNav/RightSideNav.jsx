import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn btn-outline border-blue-400	 w-full normal-case  sm:h-[70px] lg:h-0 hover:text-white">
          <FaGoogle className="text-blue-400"></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full normal-case sm:h-[70px]  lg:h-0 ">
          <BsGithub className=""></BsGithub>
          Login with GitHub
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold p-4  mb-4">Find Us On</h2>
        <a
          href=""
          className="p-4 lg:px-6  flex items-center border rounded-t-lg text-lg gap-2 text-gray-600"
        >
          <div className="bg-gray-100 rounded-full p-2">
            <FaFacebookF className="text-blue-900"></FaFacebookF>
          </div>
          <span>Facebook</span>
        </a>
        <a
          href=""
          className="p-4 lg:px-6  flex items-center border-x  text-lg gap-2 text-gray-600"
        >
          <div className="bg-gray-100 rounded-full p-2">
            <BsTwitter className="text-blue-400"></BsTwitter>
          </div>
          <span>Twitter</span>
        </a>
        <a
          href=""
          className="p-4 lg:px-6  flex items-center border rounded-b-lg text-lg gap-2 text-gray-600"
        >
          <div className="bg-gray-100 rounded-full p-2">
            <FiInstagram className="text-rose-400"></FiInstagram>
          </div>
          <span>Instagram</span>
        </a>
      </div>
      {/* Q zone */}
      <div className="p-4 space-y-3 mb-6 bg-gray-100">
        <h2 className="text-2xl font-semibold">Q Zone</h2>
        <img className="mx-auto" src={qZone1} alt="" />
        <img className="mx-auto" src={qZone2} alt="" />
        <img className="mx-auto" src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
