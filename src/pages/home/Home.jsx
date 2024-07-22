import "./home.css";
import Header from "../../components/header/Header";
import Newsletter from "../../components/newsletter/Newsletter";
import { Link } from "react-router-dom";
import Latestarticles from "../../components/latestarticles/Latestarticles";
// import Latestarticles from "../../components/latestarticles/Latestarticles";
// import Footer from "../../components/footer/Footer";

const Home = ({ articles = [] }) => {
  return (
    <>
      <div className="home">
        <Header />
        <div className="featured-section">
          <div className="wave-text">
            <h1>Featured Blogs</h1>
            <button className="show-all-articles">
              <Link to="/articles">Show all articles</Link>
            </button>
          </div>
          <div className="main-container">
            <div className="cards-container">
              {articles
                ?.slice(articles.length - 3, articles.length)
                .map((article, index) => (
                  <div className="card" key={index}>
                    <img
                      className="card-img"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                    <h3 className="card-title">{article.title}</h3>
                    <p className="card-description">{article.description}</p>
                    <Link
                      className="card-button"
                      to={`/articles/${article.title}`}
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
      <div className="quote-section">
        <div className="quote-container">
          <button className="quote-button">Quote of the day</button>
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <h3>- Mahatma Gandhi</h3>
        </div>
      </div>

      <Latestarticles articles={articles} />

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

export default Home;
