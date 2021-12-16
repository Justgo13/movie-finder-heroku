import React, { useState } from "react";

import DropdownFactory from "./DropdownFactory";

import "bootstrap/dist/css/bootstrap.css";
import "../../styles/SearchResults.css";

const GeneralMovieDropdown = ({
  Rated,
  Released,
  Runtime,
  Genre,
  Plot
}) => {
  const [plotFull, setPlotFull] = useState(false);
  const showFullPlot = () => {
    setPlotFull(!plotFull);
  };

  const generalMovieDetailsMenu = () => {
    const shortPlotLength = 100;
    let trimmedPlot =
      Plot && Plot.length > shortPlotLength
        ? Plot.substring(0, shortPlotLength - 3) + "..."
        : Plot;

    if (plotFull) {
      trimmedPlot = Plot;
    }

    return (
      <div className="modal__dropdown">
        <p>{`Rating: ${Rated}`}</p>
        <p>{`Released: ${Released}`}</p>
        <p>{`Runtime: ${Runtime}`}</p>
        <p>{`Genre: ${Genre}`}</p>
        <p>
          {`Plot: ${trimmedPlot}`}{" "}
          <a href="#" className={"readMore"} onClick={showFullPlot}>
            {plotFull ? "Read Less" : "Read More"}
          </a>
        </p>
      </div>
    );
  };

  return (
    <DropdownFactory header="Movie Details" dropdown={generalMovieDetailsMenu} headerCSS="general_movie"/>
  );
};

export default GeneralMovieDropdown;