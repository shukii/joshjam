import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import Contact from "../../molecules/Contact";

import "./_styles.scss";

const ImageHeader = props => {
  const { name, statement, contact, page } = props;
  return (
    <header className={`image-header image-header-${page}`}>
      {name && <div className="full-name">{name}</div>}
      {statement && (
        <div className="statement">
          <FontAwesomeIcon icon={faQuoteLeft} /> {statement}
          {"  "}
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      )}
      {contact && <Contact {...contact} />}
    </header>
  );
};

export default ImageHeader;
