import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./styles.scss";

const Contact = props => {
  const { email, linkedIn, twitter } = props;
  return (
    <div className="contact">
      {email && (
        <div className="email">
          <a href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      )}
      {linkedIn && (
        <div className="linked-in">
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      )}
      {twitter && (
        <div className="twitter">
          <a href={`https://twitter.com/${twitter}`}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      )}
    </div>
  );
};
export default Contact;
