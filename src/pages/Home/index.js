import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import PageLayout from "../../organisms/PageLayout";
import Blurb from "../../atoms/Blurb";

import { fetchHome } from "../../actions";

import "./_styles.scss";

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchHome();
  }

  render() {
    const { statement, blurb } = this.props;
    return (
      <PageLayout>
        <Grid stackable columns={2}>
          <Grid.Column>
            <img src="/img/josh.jpg" className="pic" alt="Josh Benson" />
          </Grid.Column>
          <Grid.Column>
            <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
            <div className="statement">{statement}</div>
            <FontAwesomeIcon icon={faQuoteRight} size="3x" />
            <Blurb blurb={blurb} />
          </Grid.Column>
        </Grid>
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  statement: state.home.statement,
  blurb: state.home.blurb
});

export default connect(
  mapStateToProps,
  { fetchHome }
)(Home);
