import React from "react";
import "./Contact.css";
import ContactForm from "../../components/contactform/ContactForm";
import Newsletter from "../../components/newsletter/Newsletter";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="header">
        <h3 className="header-title">Contact Us</h3>
        <h3 className="header-subtitle">
          Welcome to the blog, written by professionals; It's connect people
        </h3>
      </div>
      <div className="contact-container py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <ContactForm />
            </div>
            <div className="col-12 col-md-6 contact-info order-first order-md-last">
              <h2 className="contact-subtitle">Get in touch with us</h2>
              <p className="contact-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="contact-text">
                <i className="fas fa-map-marker-alt"></i> 123 Main St. New York,
                NY 10001
              </p>
              <p className="contact-text">
                <i className="fas fa-phone"></i> +1 123 456 7890
              </p>
              <p className="contact-text">
                <i className="fas fa-envelope"></i> 6jV5s@example.com
              </p>
              <p className="contact-text">
                <i className="fas fa-clock"></i> Monday - Friday: 9:00 AM - 5:00
                PM
              </p>
              <p className="contact-text">
                <i className="fas fa-clock"></i> Saturday: 9:00 AM - 12:00 PM
              </p>
              <p className="contact-text">
                -<i className="fas fa-clock"></i> Sunday: Closed
              </p>
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

export default Contact;
