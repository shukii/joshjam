import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./styles.scss";

const Contact = props => {
  const { email, telephone, linkedIn, twitter } = props;
  return (
    <div className="contact">
      <div>Contact Me</div>
      {email && (
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      )}
      {telephone && (
        <div className="telephone">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <div>{telephone}</div>
        </div>
      )}
      {linkedIn && (
        <div className="linked-in">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >{`https://www.linkedin.com/in/${linkedIn}`}</a>
        </div>
      )}
      {twitter && (
        <div className="twitter">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
        </div>
      )}
    </div>
  );
};
export default Contact;
