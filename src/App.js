import React from 'react';
import './App.css';
import Row from './row';
import requests from './request';
import Banner from './banner'; 
function App() {
  return (
    <div className="App">
      <Banner/>
      <Row title="Netflix-Orginal" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}/><br/>
      <Row title="Trending" fetchUrl={requests.fetchTrending} /><br/>
      <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} /><br/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /><br/>
      <Row title="Action-Movies" fetchUrl={requests.fetchActionMovies} /><br/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /><br/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} /><br/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} /><br/>
    </div>
  );
}

export default App;
