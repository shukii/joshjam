import React from "react";
import { connect } from "react-redux";

import PageLayout from "../../organisms/PageLayout";
import ImageHeader from "../../organisms/ImageHeader";
import Introduction from "../../molecules/Introduction";

import { fetchHome } from "../../actions";

import "./_styles.scss";

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchHome();
  }

  render() {
    const { name, statement, blurb, contact, picture } = this.props;
    return (
      <PageLayout>
        <ImageHeader name={name} statement={statement} contact={contact} />
        <Introduction blurb={blurb} picture={picture} name={name} />
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  statement: state.home.statement,
  blurb: state.home.blurb,
  contact: state.home.contact,
  name: state.home.name,
  picture: state.home.picture
});

export default connect(
  mapStateToProps,
  { fetchHome }
)(Home);
