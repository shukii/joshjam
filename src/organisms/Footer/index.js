import React from "react";
import { connect } from "react-redux";
import { fetchContact } from "../../actions";

import "./_styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Contact from "../../molecules/Contact";

class Footer extends React.Component {
  componentWillMount() {
    this.props.fetchContact();
  }

  render() {
    const { contact } = this.props;

    if (contact) {
      const { telephone, copyright } = contact;
      return (
        <div className="footer">
          <Contact {...contact} small />
          {copyright && (
            <div className="copyright">
              Copyright <FontAwesomeIcon icon={faCopyright} /> 2019 {copyright}{" "}
              All Rights Reserved.
            </div>
          )}
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { fetchContact }
)(Footer);
