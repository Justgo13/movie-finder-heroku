import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../../../shared/Button";
import GeneralMovieDropdown from "./GeneralMovieDropdown";
import PeopleDetails from "./PeopleDetails";
import ExtraMovieDetails from "./ExtraMovieDetails.js";
import Achievements from "./Achievements";

import "../../styles/SearchResults.css";

const ResultModal = ({ modalState, hideHandler, movieData }) => {
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Plot,
    Poster,
    Director,
    Writer,
    Actors,
    Language,
    Country,
    Ratings,
    Awards,
  } = movieData;

  let generalMovieDetails = {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Plot,
    Poster,
  };
  
  let peopleDetails = { Director, Writer, Actors };
  let extraMovieDetails = { Language, Country };
  let achievments = { Ratings, Awards };
  

  return (
    <Modal show={modalState} onHide={hideHandler}>
      <Modal.Header className="modal__header">
        <Button
          className={"btn-close modal__close"}
          onClick={hideHandler}
        ></Button>
        {`${Title} (${Year})`}
      </Modal.Header>
      <Modal.Body>
        <img src={generalMovieDetails.Poster} className="modal__image" />
        <GeneralMovieDropdown {...generalMovieDetails}/>
        <PeopleDetails {...peopleDetails}/>
        <ExtraMovieDetails {...extraMovieDetails}/>
        <Achievements {...achievments}/>
      </Modal.Body>
    </Modal>
  );
};

export default ResultModal;
