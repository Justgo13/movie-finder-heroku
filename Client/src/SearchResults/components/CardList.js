import React from "react";
import {useNavigate, useParams} from "react-router-dom";

import CardItem from "./CardItem";

import Button from "../../shared/Button";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/SearchResults.css";

const CardList = (props) => {
  const movieName = props.movieName;
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/");
  }

  return (
    <div className="container">
      <div className="row">
        <h3 className="display-4">{`Showing results for "${movieName}"`}</h3>
        {props.movies.map((movie) => (
          <div key={movie.imdbID} className="col-md-4 col-sm-6">
            <CardItem
              title={movie.Title}
              year={movie.Year}
              image={movie.Poster}
              imdbID={movie.imdbID}
            />
          </div>
        ))}
        <Button
          className={"btn btn-primary back_to_search"}
          onClick={backHandler}
        >
          Back To Search
        </Button>
      </div>
    </div>
  );
};

export default CardList;
