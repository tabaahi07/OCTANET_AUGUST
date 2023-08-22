import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from '../api/axios';
import requests from '../api/requests';

function Banner() {
  const [movie, setMovie] = useState({});

  async function fetchData() {
    try {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      setMovie(response.data.results[randomIndex]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function truncate(str, len) {
    return str?.length > len ? str.substr(0, len - 1) + '...' : str;
  }

  const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h2 className="banner__description">{truncate(movie.overview, 150)}</h2>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
