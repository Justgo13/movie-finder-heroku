import React from "react";

import DropdownFactory from "./DropdownFactory";

import "bootstrap/dist/css/bootstrap.css";
import "../../styles/SearchResults.css";

const PeopleDetails = ({ Director, Writer, Actors }) => {
  const peopleDetailsMenu = () => {
    return (
      <div className="modal__dropdown">
        <p>{`Directory: ${Director}`}</p>
        <p>{`Writer: ${Writer}`}</p>
        <p>{`Actors: ${Actors}`}</p>
      </div>
    );
  };

  return (
    <DropdownFactory header="People Details" headerCSS="people_header" dropdown={peopleDetailsMenu}/>
  );
};

export default PeopleDetails;
