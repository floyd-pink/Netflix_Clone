import React from 'react';
import './App.css';
import Row from './row';
import requests from './request';
import Banner from './banner'; 
import Nav from './nav';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
             <Nav />
              <Banner />
              <Row title="Netflix-Original" fetchUrl={requests.fetchNetflixOriginals} isLarge={true} />
              <Row title="Trending" fetchUrl={requests.fetchTrending} />
              <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
              <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
              <Row title="Action-Movies" fetchUrl={requests.fetchActionMovies} />
              <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
              <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
