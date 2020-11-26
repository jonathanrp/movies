import axios from 'axios';
import config from '../../config';

export const DISCOVER_MOVIES = 'DISCOVER_MOVIES';
export const DISCOVER_MOVIES_SUCCESS = 'DISCOVER_MOVIES_SUCCESS';
export const DISCOVER_MOVIES_ERROR = 'DISCOVER_MOVIES_ERROR';

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_ERROR = 'SEARCH_MOVIE_ERROR';


// DISCOVER 
function discoverMovies() {
  return {
    type: DISCOVER_MOVIES,
  };
}

function discoverMoviesSuccess(results) {
  return {
    type: DISCOVER_MOVIES_SUCCESS,
    discoverMovies: results,
  };
}

function discoverMoviesError(error) {
  return {
    type: DISCOVER_MOVIES_ERROR,
    error,
  };
}

export function fetchMovies() {
  return (dispatch) => {
    dispatch(discoverMovies());
    return axios
      .get(`${config.discover}?api_key=${config.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`, {})
      .then((response) => {
        if (response.status !== 200) {
          dispatch(discoverMoviesError(response));
        } else {
          dispatch(discoverMoviesSuccess(response.data.results));
        }
      })
      .catch((error) => {
        dispatch(discoverMoviesError(error));
      });
  };
}

// SEARCH 

function searchMovie(searchTerm) {
  return {
    type: SEARCH_MOVIE,
    searchTerm,
  };
}

function searchMovieSuccess(results) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    searchMovies: results,
  };
}

function searchMovieError(error) {
  return {
    type: SEARCH_MOVIE_ERROR,
    error,
  };
}

export function searchMovieBy(term) {
  return (dispatch) => {
    dispatch(searchMovie());
    return axios
    .get(`${config.search}?api_key=${config.key}&query=${term}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`, {})
      .then((response) => {
        if (response.status !== 200) {
          dispatch(searchMovieError(response));
        } else {
          dispatch(searchMovieSuccess(response.data.results));
        }
      })
      .catch((error) => {
        dispatch(searchMovieError(error));
      });
  };
}