import React from "react";
import { Link } from "react-router-dom";
import "./blogpage.css";
import { useParams } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import Newsletter from "../../components/newsletter/Newsletter";
import Latestarticles from "../../components/latestarticles/Latestarticles";

const Blogpage = ({ articles }) => {
  const { title } = useParams();

  const article = articles.find((article) => article.title === title);
  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <>
      <div className="blogheader-container">
        <div className="container px-5">
          <p>
            {" "}
            <IoMdTime className="time-icon" /> - 02 min Reading in
          </p>
          <h1 className="blogheader-title">{article.title}</h1>
          <p className="blogheader-description">
            Without even reducing the 40-hour work week. Time is money, right?
          </p>
          <p className="pt-5">- by {article.author}</p>
          <p>Published in : {article.publishedAt}</p>

          <img
            src={article.urlToImage}
            alt={article.title}
            className="blog-image"
          />

          <p
            className="pt-5"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <p
            className="pt-3"
            dangerouslySetInnerHTML={{ __html: article.description }}
          />
        </div>
      </div>
      <Latestarticles articles={articles} />
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

export default Blogpage;
