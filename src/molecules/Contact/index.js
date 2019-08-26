import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter /*, faWhatsapp */ } from "@fortawesome/free-brands-svg-icons";

import "./_styles.scss";

const Contact = props => {
  const { email, linkedIn, twitter, telephone, /*whatsapp,*/ small } = props;
  return (
    <div className={`contact ${small ? "contact-small" : ""}`}>
      {telephone && (
        <div className={`telephone ${small ? "telephone-small" : ""}`}>
          <a href={`tel:${telephone}`}>
            <FontAwesomeIcon icon={faPhone} size="2x" />{" "}
            <span className="telephone-number">{small && telephone}</span>
            &nbsp;&nbsp;
          </a>
        </div>
      )}
      {email && (
        <div className="email">
          <a href={`mailto:${email}`}>
            <span className="sr-only">{email}</span>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          &nbsp;&nbsp;&nbsp;
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
          &nbsp;&nbsp;&nbsp;
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
          &nbsp;&nbsp;
        </div>
      )}
      {/* {whatsapp && (
        <div className="whatsapp">
          <a href={`https://api.whatsapp.com/send?phone=${whatsapp}`}>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />{" "}
          </a>
        </div>
      )} */}
    </div>
  );
};
export default Contact;
