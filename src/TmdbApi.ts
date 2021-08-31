interface IRequests {
    fetchTrending: string;
    fetchNetflixOriginals: string;
    fetchTopRated: string;
    fetchActionMovies: string;
    fetchComedyMovies: string;
    fetchHorrorMovies: string;
    fetchRomanceMovies: string;
    fetchDocumentaries: string;
  }
  
  export const TMDBAPI: IRequests = {
    fetchTrending: `${process.env.REACT_APP_TMDB_BASE_URL}/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${process.env.REACT_APP_TMDB_BASE_URL}/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
    fetchTopRated: `${process.env.REACT_APP_TMDB_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    fetchActionMovies: `${process.env.REACT_APP_TMDB_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
    fetchComedyMovies: `${process.env.REACT_APP_TMDB_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${process.env.REACT_APP_TMDB_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${process.env.REACT_APP_TMDB_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${process.env.REACT_APP_TMDB_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
  };
