import "./newsletter.css";
import { useState } from "react";

const Newsletter = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });

  const handleInput = (event) => {
    let newDetails = { ...details, [event.target.name]: event.target.value };
    setDetails(newDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!details.name && !details.email) {
      alert("Please fill in all fields");
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      };
      const res = fetch(
        "https://blogapplication-c153b-default-rtdb.firebaseio.com/NewsletterRegisters.json",
        options
      );

      if (res) {
        alert("Form submitted successfully");
      }

      setDetails({ name: "", email: "" });
    }
  };
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h1>Subscribe to our monthly newsletter</h1>
        <p>
          Stay up-to-date about latest tech and new world. Unsubscribe at
          anytime!
        </p>
      </div>
      <div className="newsletter-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={details.name}
              id="name"
              placeholder="Enter your Full Name"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={details.email}
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>
          <center>
            <button type="submit">Register</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
