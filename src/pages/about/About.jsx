import React from "react";
import office from "../../assets/office.webp";
import office2 from "../../assets/office-2.jpeg";
import "./about.css";
import Newsletter from "../../components/newsletter/Newsletter";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="header">
        <h3 className="header-title">About</h3>
        <h3 className="header-subtitle">
          Welcome to the blog, written by professionals; It's connect people
        </h3>
      </div>

      <div className="about-us-container">
        <div className="about-us-first-container container pt-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="about-us-title">
                Tushi is a media network that builds and operates.
              </h3>
              <p className="about-us-description">
                We do this with the aim of creating the future of media. The
                future of media is one that is disruptive, agile, and credible.
                It embraces diversity, creates a positive impact, and leaves its
                audience in a better place than where they were before. We
                advocate for a media that embraces this and we embody.
              </p>
            </div>
            <div className="col-md-6 order-first order-md-last">
              <img src={office} className="about-us-img" alt="office" />
            </div>
          </div>
        </div>

        <div className="about-us-second-container container pt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={office2} className="about-us-img" alt="office" />
            </div>
            <div className="col-md-6">
              <h3 className="about-us-title">
                We are a media network that builds and operates.
              </h3>
              <p className="about-us-description">
                The truth is important to us, so our work must always be
                trustworthy and demonstrate integrity. We push ourselves to move
                fast and not be afraid to change things up.
              </p>
              <p className="about-us-description">
                We actively encourage fresh ideas and creative ways of doing
                things better.
              </p>
              <p className="about-us-description">
                Our work must positively impact the lives. We come from
                different backgrounds and are varied in our thoughts and
                beliefs. We respect diversity and our work reflects that.
              </p>
            </div>
          </div>
        </div>

        <div className="about-us-first-container container pt-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="about-us-title">
                Tushi is a media network that builds and operates.
              </h3>
              <p className="about-us-description">
                We do this with the aim of creating the future of media. The
                future of media is one that is disruptive, agile, and credible.
                It embraces diversity, creates a positive impact, and leaves its
                audience in a better place than where they were before. We
                advocate for a media that embraces this and we embody.
              </p>
            </div>
            <div className="col-md-6 order-first order-md-last">
              <img src={office} className="about-us-img" alt="office" />
            </div>
          </div>
        </div>
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

export default About;
