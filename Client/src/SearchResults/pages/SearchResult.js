import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import CardList from "../components/CardList";
import { useHttpHook } from "../../shared/hooks/http-hook";
import NoMovies from "../components/NoMovies";

const SearchResult = () => {
  const { error, sendRequest } = useHttpHook();
  const movieName = useParams().movieName;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/movie-search/results/${movieName}`
        );
        setMovies(responseData["movies"]);

        /* 
          movies look like  
          "movies": [
          {
              "Title": "Jason Bourne",
              "Year": "2016",
              "imdbID": "tt4196776",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg"
          }, ... ]
        
        */
      } catch (err) {}
    };

    fetchMovies();
  }, []);

  if (error) {
    return <NoMovies />;
  }

  return (
      <CardList movies={movies} movieName={movieName}/>
  );
};

export default SearchResult;
