import React from "react";

import Input from "../components/Input";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/SearchStyles.css";

const MovieSearch = () => {
  return (
    <div className="title container">
      <h2 className="display-1">Movie Finder</h2>
      <Input tagName="Movie Name" activeSearch={"MOVIE"}></Input>
    </div>
  );
};

export default MovieSearch;
