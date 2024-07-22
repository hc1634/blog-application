import React from "react";
import "./articles.css";
import { Link } from "react-router-dom";
import Newsletter from "../../components/newsletter/Newsletter";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="header">
        <h3 className="header-title">Blogs</h3>
        <h3 className="header-subtitle">
          Welcome to the blog, written by professionals; It's connect people
        </h3>
      </div>
      <div className="main-container">
        <div className="cards-container">
          {articles.map((article) => (
            <div className="card">
              <img
                className="card-img"
                src={article.urlToImage}
                alt={article.title}
              />
              <h3 className="card-title">{article.title}</h3>
              <p className="card-description">{article.description}</p>
              <Link
                className="card-button"
                to={`/blogs/${article.title}`}
                rel="noreferrer"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />

      <div className="footer-section">
        <p className="copyright">Copyright © 2023. All rights reserved.</p>
        <p className="copyright">
          <Link className="footer-link" to="/termsofservice">
            Terms of Service
          </Link>{" "}
          |{" "}
          <Link className="footer-link" to="/privacypolicy">
            Privacy Policy
          </Link>
        </p>
        <p className="copyright">Follow us : </p>
      </div>
    </>
  );
};

export default Articles;
