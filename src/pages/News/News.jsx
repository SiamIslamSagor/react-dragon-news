import { useParams } from "react-router-dom";
import Header from "../Sheard/Header/Header";
import RightSideNav from "../Sheard/RightSideNav/RightSideNav";
import Navbar from "../Sheard/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="col-span-3">
          <h2 className="text-6xl">News details: {id}</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <h2>news details</h2>
    </div>
  );
};

export default News;
