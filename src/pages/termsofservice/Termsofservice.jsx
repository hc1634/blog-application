import React from "react";
import "./termsofservice.css";
import { Link } from "react-router-dom";

const Termsofservice = () => {
  return (
    <>
      <div className="header">
        <h3 className="header-title">Terms of service</h3>
        <h3 className="header-subtitle">
          Welcome to the blog, written by professionals; It's connect people
        </h3>
      </div>

      <div className="terms-container">
        <div className="container pt-5">
          <div className="row">
            <h1 className="terms-title">A. Definitions</h1>
            <p className="terms-description">
              <strong>1.1.1. </strong>
              <strong>Article 1. </strong>
              Short version: We use these basic terms throughout the agreement,
              and they have specific meanings. You should know what we mean when
              we use each of the terms. There's not going to be a test on it,
              but it's still useful information.
            </p>

            <p className="terms-description">
              <strong>1.1.2. </strong>
              <strong>Article 2. </strong>
              Short version: We use these basic terms throughout the agreement,
              and they have specific meanings. You should know what we mean when
              we use each of the terms. There's not going to be a test on it,
              but it's still useful information.
            </p>

            <p className="terms-description">
              <strong>1.1.3. </strong>
              <strong>Article 3. </strong>
              Short version: We use these basic terms throughout the agreement,
              and they have specific meanings. You should know what we mean when
              we use each of the terms. There's not going to be a test on it,
              but it's still useful information.
            </p>

            <h1 className="terms-title">B. Account Terms</h1>
            <p className="terms-description">
              <strong>1.2.1. </strong>
              <strong>Article 1. </strong>
              Short version: Personal Accounts and Organizations have different
              administrative controls; a human must create your Account; you
              must be 13 or over; you must provide a valid email address; and
              you may not have more than one free Account. You alone are
              responsible for your Account and anything that happens while you
              are signed in to or using your Account. You are responsible for
              keeping your Account secure.
            </p>

            <p className="terms-description">
              <strong>1.2.2. </strong>
              <strong>Article 2. </strong>
              Short version: Personal Accounts and Organizations have different
              administrative controls; a human must create your Account; you
              must be 13 or over; you must provide a valid email address; and
              you may not have more than one free Account. You alone are
              responsible for your Account and anything that happens while you
              are signed in to or using your Account. You are responsible for
              keeping your Account secure.
            </p>

            <p className="terms-description">
              <strong>1.2.2. </strong>
              <strong>Article 2. </strong>
              Short version: Personal Accounts and Organizations have different
              administrative controls; a human must create your Account; you
              must be 13 or over; you must provide a valid email address; and
              you may not have more than one free Account. You alone are
              responsible for your Account and anything that happens while you
              are signed in to or using your Account. You are responsible for
              keeping your Account secure.
            </p>

            <h1 className="terms-title">C. Legal Terms</h1>
            <p className="terms-description">
              <strong>1.3.1. </strong>
              <strong>Article 1. </strong>
              Short version: We use these basic terms throughout the agreement,
              and they have specific meanings. You should know what we mean when
              we use each of the terms. There's not going to be a test on it,
              but it's still useful information.
            </p>
            <p className="terms-description">
              <strong>1.3.2. </strong>
              <strong>Article 2. </strong>
              Short version: We use these basic terms throughout the agreement,
              and they have specific meanings. You should know what we mean when
              we use each of the terms. There's not going to be a test on it,
              but it's still useful information.
            </p>
            <p className="terms-description">
              <strong>1.3.3. </strong>
              <strong>Article 3. </strong>
              Short version: We use these basic terms throughout the agreement,
              and they have specific meanings. You should know what we mean when
              we use each of the terms. There's not going to be a test on it,
              but it's still useful information.
            </p>
          </div>
        </div>
      </div>

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

export default Termsofservice;
