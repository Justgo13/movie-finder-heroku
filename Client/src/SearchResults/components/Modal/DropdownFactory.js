import React, {useState} from "react";

import Button from "../../../shared/Button";

const DropdownFactory = ({header, dropdown, headerCSS}) => {
  const [dropdownDetails, setDropDownDetails] = useState(false);

  const expandDropdown = () => {
    setDropDownDetails(!dropdownDetails);
  };

  return (
    <div className="box">
      <h3 className={`display-6 ${headerCSS}`}>
        {header}
        <Button className="more__details" onClick={expandDropdown}>
          <i className="fas fa-plus"></i>
        </Button>
      </h3>
      {!!dropdownDetails && dropdown()}
    </div>
  );
};

export default DropdownFactory;
