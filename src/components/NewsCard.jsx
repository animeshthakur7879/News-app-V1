import React, { useContext } from "react";
import ThemeContext from "../providers/theme/ThemeContext";

const NewsCard = ({ news }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={
        dark
          ? "card mb-3 rounded-0 p-3 text-light bg-dark"
          : "card mb-3 rounded-0 p-3"
      }
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              news.urlToImage ||
              "https://cdn.dribbble.com/users/406903/screenshots/6723682/drawkit-grape-pack-illustration-3-dribbble-export-v0.1.gif"
            }
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <small className="text-secondary">
                Date :{new Date(news.publishedAt).toDateString("en-IN")}
              </small>
              <br />
              <small className="text-secondary">Source : {news.author}</small>
            </p>
            <a
              href={news.url}
              target="_blank"
              className={
                dark
                  ? "btn btn-sm btn-secondary rounded-0 float-end"
                  : "btn btn-sm btn-primary rounded-0 float-end"
              }
            >
              Read Full News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
