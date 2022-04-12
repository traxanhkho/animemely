import React from "react";
import "../../style/heading.css" ; 

const Heading = ({ name }) => {
  return (
    <div className="heading-section">
      <h1>{name}</h1>
    </div>
  );
};

export default Heading;
