// App.js
import "./App.css";
import Profile from "./Profile";
import NewsSearch from "./NewsSearch";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Conversations from "./Conversations";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news-search" element={<NewsSearch />} />
          {/* Optionally, you can add a default route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
