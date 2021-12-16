import { useCallback, useReducer } from "react";

const movieNameReducer = (state, action) => {
  switch (action.type) {
    case "MOVIE_NAME_CHANGE":
        return {
          ...state,
          movieName: action.movieName
        }
    default:
      return state;
  }
}

export const useMovieNameInput = (initialMovieNameState) => {
  const [movieNameState, dispatch] = useReducer(movieNameReducer, initialMovieNameState)
  
  const movieNameChangeHandler = useCallback(async (movieName) => {
    dispatch({
      type: "MOVIE_NAME_CHANGE",
      movieName
    });
  }, []);

  return [movieNameState, movieNameChangeHandler];
};