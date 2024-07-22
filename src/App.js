import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Articles from "./pages/articles/Articles";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Blogpage from "./pages/blogpage/Blogpage";
import Latest from "./pages/latest/Latest";
import Privacypolicy from "./pages/privacypolicy/Privacypolicy";
import axios from "axios";
import Termsofservice from "./pages/termsofservice/Termsofservice";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9603ab7b26a54b938a45298e87f8b81b"
      )
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/blogs" element={<Articles articles={articles} />} />
        <Route
          path="/articles/:title"
          element={<Blogpage articles={articles} />}
        />
        <Route path="/latest" element={<Latest articles={articles} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsofservice" element={<Termsofservice />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
