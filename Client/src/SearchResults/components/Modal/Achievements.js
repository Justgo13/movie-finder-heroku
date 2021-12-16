import React, { Fragment } from "react";

import DropdownFactory from "./DropdownFactory";

import "bootstrap/dist/css/bootstrap.css";
import "../../styles/SearchResults.css";

const Achievements = ({ Ratings, Awards }) => {
  const extraDetailsMenu = () => {
    let ratings;
    if (Ratings.length === 0) {
      Ratings = "N/A";
    } else {
      ratings = (
        <ul>
          {Ratings.map((r) => {
            r.key = Ratings.indexOf(r);
            const ratingSource = r.Source;
            const ratingScore = r.Value;
            return (
              <Fragment key={r.key}>
                <li className="ratings">{ratingSource}: {ratingScore}</li>
              </Fragment>
            );
          })}
        </ul>
      );
    }

    return (
      <div className="modal__dropdown">
        <p>{`Ratings:`}</p>
        {ratings}
        <p>{`Awards: ${Awards}`}</p>
      </div>
    );
  };

  return (
    <DropdownFactory header="Achievements" dropdown={extraDetailsMenu} headerCSS="achievements_header"/>
  );
};

export default Achievements;
