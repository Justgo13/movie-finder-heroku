import React, { Fragment, useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/SearchResults.css";

import Button from "../../shared/Button";
import ResultModal from "./Modal/ResultModal";
import { useHttpHook } from "../../shared/hooks/http-hook";

const CardItem = ({title, image, year, imdbID}) => {

  const [modalState, setModalState] = useState(false);

  const showModal = () => {
    setModalState(true);
  }

  const hideModal = () => {
    setModalState(false);
  }

  // call on omdb api to get more info about movie using imdb id and movie title
  const { error, sendRequest } = useHttpHook();

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const responseData = await sendRequest(
          `/movie-search/results/movie/${imdbID}`
        );
        setMovieData(responseData["movie"]);
      } catch (err) {}
    };

    fetchMovieData();
  }, []);

  return (
    <Fragment>
      <ResultModal modalState={modalState} hideHandler={hideModal} movieData={movieData}/>
      <Button className={"movie-result"} onClick={showModal}>
        <div className="card">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h4 className="card-title display-6">{`${title} (${year})`}</h4>
          </div>
        </div>
      </Button>
    </Fragment>
  );
};

export default CardItem;
