import React, { useContext, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import ThemeContext from "../providers/theme/ThemeContext";
import NewsContext from "../providers/news/NewsContext";
import { fetchNews } from "../providers/news/NewsActions";
import { toast } from "react-toastify";
import Slider from "../components/Slider";

const Home = () => {
  const { dark } = useContext(ThemeContext);
  const { newsData, dispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("Indore");
  }, []);

  if (!newsData || newsData?.length === 0) {
    toast.error("Kindly Search Valid News!!");
    getNews("Indore");
  }

  return (
    <div
      id="container"
      className={
        dark ? "container-fluid p-5 bg-secondary" : "container-fluid p-5"
      }
    >
      {/* <Slider /> */}

      <marquee>
        <p className=" text-dark p my-2">Daily Quotes Here</p>
      </marquee>

      <h1 className="display-5 text-center">Top News</h1>

      <div className="row g-3 my-3">
        <WeatherCard />

        <div className="col-sm-12 col-md-8">
          {!newsData || newsData.length === 0 ? (
            <h1 className="text-center display-4">Loading...</h1>
          ) : (
            newsData.map((news, index) => <NewsCard key={index} news={news} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
