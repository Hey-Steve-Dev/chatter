import React, { useState } from "react";

const NewsSearch = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [earliestDate, setEarliestDate] = useState("");
  const [latestDate, setLatestDate] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = () => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "n3mAD0idyRgs1qAcQQVaXOTZJbMFMLo0");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    const earliestPublishDate = earliestDate ? earliestDate : "2023-01-01";
    const latestPublishDate = latestDate ? latestDate : "2024-01-01";

    // Using full domain names for news sources
    const newsSources =
      "https://www.cnn.com/,https://www.npr.org/,https://www.bbc.com/,https://abcnews.go.com/,https://www.cbsnews.com/,https://www.nbcnews.com/,https://www.foxnews.com/";

    fetch(
      `https://api.apilayer.com/world_news/search-news?text=${encodeURIComponent(
        searchTitle
      )}&earliest-publish-date=${earliestPublishDate}&latest-publish-date=${latestPublishDate}&news-sources=${newsSources}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setNewsData(result.news || []))
      .catch((error) => setError(error.message));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchNews();
    }
  };

  // Extract domain name from the URL
  const getDomainName = (url) => {
    try {
      const { hostname } = new URL(url);
      return hostname.replace("www.", ""); // Remove "www." for a cleaner look
    } catch (error) {
      return url;
    }
  };

  return (
    <div className="news-search-container">
      <h1 className="news-search-title">News Search</h1>

      <div className="news-search-inputs">
        {/* Search input */}
        <input
          type="text"
          className="news-search-input"
          placeholder="Search news by title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        {/* Earliest date input */}
        <input
          type="date"
          className="news-search-date"
          value={earliestDate}
          onChange={(e) => setEarliestDate(e.target.value)}
        />

        {/* Latest date input */}
        <input
          type="date"
          className="news-search-date"
          value={latestDate}
          onChange={(e) => setLatestDate(e.target.value)}
        />

        {/* Search button */}
        <button className="news-search-button" onClick={fetchNews}>
          Search
        </button>
      </div>

      {error && <p className="news-search-error">Error: {error}</p>}

      {/* News results */}
      <div className="news-results">
        {newsData.length > 0 ? (
          newsData.map((newsItem) => (
            <div key={newsItem.id} className="news-item">
              <h3 className="news-item-title">{newsItem.title}</h3>

              {/* Display source as the domain name from the URL */}
              <p className="news-item-source">
                Source: {getDomainName(newsItem.url)}
              </p>

              <p className="news-item-summary">{newsItem.summary}</p>
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="news-item-image"
              />
              <a
                href={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-item-link"
              >
                Read more
              </a>
            </div>
          ))
        ) : (
          <p className="news-no-results">No news found</p>
        )}
      </div>
    </div>
  );
};

export default NewsSearch;
