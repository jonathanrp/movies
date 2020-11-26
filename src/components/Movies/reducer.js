import {
    DISCOVER_MOVIES,
    DISCOVER_MOVIES_SUCCESS,
    DISCOVER_MOVIES_ERROR,

    SEARCH_MOVIE,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
  } from './actions';
  
  const initialState = {
    discoverMovies: [],
    searchMovies: [],
    searchTerm: '',
    fetching: false,
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case DISCOVER_MOVIES:
        return {
          ...state,
          discoverMovies: [],
          fetching: true,
        }
      case DISCOVER_MOVIES_SUCCESS:
        return {
          ...state,
          discoverMovies: action.discoverMovies,
          fetching: false,
        }
      case DISCOVER_MOVIES_ERROR:
        return {
          ...state,
          error: action.error,
          fetching: false,
        }
        
        case SEARCH_MOVIE:
          return {
            ...state,
            searchTerm: action.searchTerm,
            searchMovies: [],
            fetching: true,
          }
        case SEARCH_MOVIE_SUCCESS:
          return {
            ...state,
            searchMovies: action.searchMovies,
            fetching: false,
          }
        case SEARCH_MOVIE_ERROR:
          return {
            ...state,
            error: action.error,
            fetching: false,
          }
      default:
        return state;
    }
  }