import React, { useContext } from "react";
import NewsContext from "../providers/news/NewsContext";

const Slider = () => {
  const { newsData } = useContext(NewsContext);

  if (!newsData) {
    return <h1 className="text-center my-3 text-secondary">Loading...</h1>;
  }

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide my-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {newsData.map((news, index) => {
          return (
            <div
              key={index}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
            >
              <img
                id="sliderImage"
                src={news.urlToImage}
                className="d-block w-100"
                alt="..."
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
