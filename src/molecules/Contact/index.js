import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./styles.scss";

const Contact = props => {
  const { email, linkedIn, twitter, telephone, small } = props;
  return (
    <div className={`contact ${small ? "contact-small" : ""}`}>
      {telephone && small && (
        <div className="telephone">
          <div>
            <FontAwesomeIcon icon={faPhone} size="2x" /> {telephone}
          </div>
        </div>
      )}
      {email && (
        <div className="email">
          <a href={`mailto:${email}`}>
            <span class="sr-only">{email}</span>
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
            <span class="sr-only">{`https://www.linkedin.com/in/${linkedIn}`}</span>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      )}
      {twitter && (
        <div className="twitter">
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">{`https://twitter.com/${twitter}`}</span>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      )}
    </div>
  );
};
export default Contact;
