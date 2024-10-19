import React, { useState, useEffect } from "react";
import backgroundImage from "./images/background-3.webp";

const NewsSearch = () => {
  /*
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false); // Ensure fetch happens once

  // Toggle testing mode: set to "on" or "off"
  const testingMode = "on"; // Change to "off" to apply API call to all profiles

  useEffect(() => {
    if (!hasFetched) {
      fetchRandomNews();
      setHasFetched(true); // Prevent multiple fetches
    }
  }, [hasFetched]);

  const fetchRandomNews = () => {
    
    const myHeaders = new Headers();

    myHeaders.append("apikey", "your_actual_api_key"); // myHeaders.append("apikey", "n3mAD0idyRgs1qAcQQVaXOTZJbMFMLo0");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    // Predefined news sources
    const newsSources = [
      "https://www.cnn.com/",
      "https://www.npr.org/",
      "https://www.bbc.com/",
      "https://abcnews.go.com/",
      "https://www.cbsnews.com/",
      "https://www.nbcnews.com/",
      "https://www.foxnews.com/",
    ];

    // Predefined two-word search terms related to world news
    const searchTerms = [
      "Climate Change",
      "Global Trade",
      "Economic Growth",
      "Peace Talks",
      "Political Crisis",
      "Human Rights",
      "Natural Disaster",
      "International Relations",
      "Pandemic Recovery",
      "Health Policy",
      "Energy Crisis",
      "Cyber Security",
      "Financial Markets",
      "Global Warming",
      "Border Dispute",
      "Refugee Crisis",
      "Space Exploration",
      "Terror Attacks",
      "Global Diplomacy",
      "Renewable Energy",
      "Food Security",
      "Arms Control",
      "Digital Currency",
      "Carbon Emissions",
      "Immigration Reform",
      "Military Expansion",
      "Ocean Pollution",
      "Humanitarian Aid",
      "Trade War",
      "Data Privacy",
      "Economic Sanctions",
      "Renewable Resources",
      "Global Aid",
      "Political Reform",
      "Climate Policy",
      "Press Freedom",
      "Wildlife Protection",
      "Trade Negotiations",
      "Labor Strikes",
      "Air Pollution",
    ];

    const fetchForSource = (source, term) => {
      const url = `https://api.apilayer.com/world_news/search-news?text=${encodeURIComponent(
        term
      )}&news-sources=${encodeURIComponent(source)}`;

      fetch(url, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error: ${response.status} - ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((result) => {
          if (testingMode === "on") {
            // Only set data for the first profile when in testing mode
            setNewsData([result.news[0]]); // Only load the first news item
          } else {
            // Otherwise set the full news data
            setNewsData(result.news || []);
          }
        })
        .catch((error) => setError(error.message));
    };

    if (testingMode === "on") {
      // If testing mode is on, pick one random source and search term
      const randomSourceIndex = Math.floor(Math.random() * newsSources.length);
      const randomTermIndex = Math.floor(Math.random() * searchTerms.length);
      const randomSource = newsSources[randomSourceIndex];
      const randomSearchTerm = searchTerms[randomTermIndex];
      fetchForSource(randomSource, randomSearchTerm);
    } else {
      // If testing mode is off, fetch for all profiles
      newsSources.forEach((source, index) => {
        const randomSearchTerm = searchTerms[index % searchTerms.length];
        fetchForSource(source, randomSearchTerm);
      });
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
    */
  return (
    <div
      className="backgroundStyle"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlayStyle"></div>
      <div className="contentStyle">
        <div className="news-search-container">
          {/* News results 
          <h1 className="news-search-title">Random World News</h1>

          {error && <p className="news-search-error">Error: {error}</p>}

          
          <div className="news-results">
            {newsData.length > 0 ? (
              newsData.map((newsItem, index) => (
                <div key={index} className="news-item">
                  <h3 className="news-item-title">{newsItem.title}</h3>

                   
                  <p className="news-item-source">
                    Source: {getDomainName(newsItem.url)}
                  </p>

                  <p className="news-item-summary">{newsItem.summary}</p>

                  {newsItem.image && (
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="news-item-image"
                    />
                  )}

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
        */}
        </div>
      </div>
    </div>
  );
};

export default NewsSearch;
