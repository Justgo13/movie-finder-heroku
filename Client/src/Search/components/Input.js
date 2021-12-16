import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMovieNameInput } from "../hooks/movie-name-hook";
import Button from "../../shared/Button";

const Input = (props) => {
  const navigate = useNavigate();

  const [movieNameInput, setMovieNameInput] = useState("");
  const [movieNameState, movieNameChangeHandler] = useMovieNameInput({
    movieName: "",
  });

  const keyPressHandler = async (event) => {
    if (event.charCode === 13) {
      await movieNameChangeHandler(movieNameInput);
      navigate(`/movie-search/results/${movieNameInput}`);
    }
  };


  return (
    <div className="input-group mb-3 search__container">
      <span
        className="input-group-text search_input"
        id="inputGroup-sizing-default"
      >
        {props.tagName}
      </span>
      <input
        type="text"
        className="form-control search_input"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={movieNameInput}
        onInput={(e) => setMovieNameInput(e.target.value)}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};

export default Input;
