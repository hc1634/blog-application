import React from "react";
import "./latest.css";
import LatestArticles from "../../components/latestarticles/Latestarticles";
import Newsletter from "../../components/newsletter/Newsletter";
import { Link } from "react-router-dom";
const Latest = ({ articles = [] }) => {
  return (
    <>
      <div className="header">
        <h3 className="header-title">Latest Articles</h3>
        <h3 className="header-subtitle">
          Welcome to the blog, written by professionals; It's connect people
        </h3>
      </div>
      <div className="latest-container">
        <LatestArticles articles={articles} />
      </div>

      <Newsletter />
      <div className="footer-section">
        <p className="copyright">Copyright © 2023. All rights reserved.</p>
        <p className="copyright">
          <Link className="footer-link" to="/termsofservice">Terms of Service</Link> |{" "}
          <Link className="footer-link" to="/privacypolicy">Privacy Policy</Link>
        </p>
        <p className="copyright">Follow us : </p>
      </div>
    </>
  );
};

export default Latest;
