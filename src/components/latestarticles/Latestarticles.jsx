import React from "react";
import { Link } from "react-router-dom";
import "./latestarticles.css";

const Latestarticles = ({ articles = [] }) => {
  const latestArticles = articles.sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  )
  return (
    <div>
      <div className="latest-section">
        <div className="latest-section-wave-text">
          <h1>Latest Articles</h1>
          <button className="show-all-latest-articles">
            <Link to="/blogs">Show all articles</Link>
          </button>
        </div>
        <div className="latest-container">
          <div className="latest-cards-container">
            {latestArticles.slice(0, 3).map((article,index) => (
              <div className="latest-card" key={index}>
                <img
                  className="latest-card-img"
                  src={article.urlToImage}
                  alt={article.title}
                />
                <h3 className="latest-card-title">{article.title}</h3>
                <p className="latest-card-description">{article.description}</p>
                <Link
                  className="latest-card-button"
                  to={`/blogs/${article.title}`}
                  rel="noreferrer"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestarticles;
