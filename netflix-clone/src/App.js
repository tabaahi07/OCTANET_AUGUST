import React from 'react';
import './App.css';
import Row from './components/Row';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import requests from './api/requests';

const sections = [
  { title: "NETFLIX ORIGINALS", fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true },
  { title: "Trending Now", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
  { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
  { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
  { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
  { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
];

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      {sections.map((section, index) => (
        <Row
          key={index}
          title={section.title}
          fetchUrl={section.fetchUrl}
          isLargeRow={section.isLargeRow}
        />
      ))}
    </div>
  );
}

export default App;
