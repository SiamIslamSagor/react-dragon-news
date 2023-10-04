import { useLoaderData } from "react-router-dom";
import Header from "../Sheard/Header/Header";
import LeftSideNav from "../Sheard/LeftSideNav/LeftSideNav";
import Navbar from "../Sheard/Navbar/Navbar";
import RightSideNav from "../Sheard/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 ">
          {news.map(singleNews => (
            <NewsCard key={singleNews} singleNews={singleNews}></NewsCard>
          ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
