import React from "react";

import DropdownFactory from "./DropdownFactory";

import "bootstrap/dist/css/bootstrap.css";
import "../../styles/SearchResults.css";

const ExtraMovieDetails = ({ Language, Country }) => {
  const extraDetailsMenu = () => {
    return (
      <div className="modal__dropdown">
        <p>{`Language: ${Language}`}</p>
        <p>{`Country: ${Country}`}</p>
      </div>
    );
  };

  return (
    <DropdownFactory header="Extra Movie Details" dropdown={extraDetailsMenu} headerCSS="extra_movie_header"/>
  );
};

export default ExtraMovieDetails;
