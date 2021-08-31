import React from "react";
import "./App.scss";
import { Banner } from "./components/banner/Banner";
import { Nav } from "./components/nav/Nav";
import { Row } from "./components/row/Row";
import { TMDBAPI } from "./TmdbApi";

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={TMDBAPI.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={TMDBAPI.fetchTopRated} isLargeRow />
      <Row title="Action Movies" fetchUrl={TMDBAPI.fetchActionMovies} isLargeRow />
      <Row title="Horror Movies" fetchUrl={TMDBAPI.fetchHorrorMovies} isLargeRow />
      <Row title="Comdedy Movies" fetchUrl={TMDBAPI.fetchComedyMovies} isLargeRow />
      <Row title="Documentary Movies" fetchUrl={TMDBAPI.fetchDocumentaries} isLargeRow />
      <Row title="Romance Movies" fetchUrl={TMDBAPI.fetchRomanceMovies} isLargeRow />
    </div>
  );
}

export default App;
