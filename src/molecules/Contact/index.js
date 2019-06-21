import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./_styles.scss";

const Contact = props => {
  const { email, linkedIn, twitter, telephone, small } = props;
  return (
    <div className={`contact ${small ? "contact-small" : ""}`}>
      {telephone && small && (
        <div className="telephone">
          <div>
            <FontAwesomeIcon icon={faPhone} size="2x" /> {telephone}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      )}
      {email && (
        <div className="email">
          <a href={`mailto:${email}`}>
            <span className="sr-only">{email}</span>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      )}
      {linkedIn && (
        <div className="linked-in">
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{`https://www.linkedin.com/in/${linkedIn}`}</span>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      )}
      {twitter && (
        <div className="twitter">
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{`https://twitter.com/${twitter}`}</span>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      )}
    </div>
  );
};
export default Contact;
