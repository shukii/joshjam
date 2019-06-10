import React from "react";
import { connect } from "react-redux";
import { Grid, Container } from "semantic-ui-react";

import PageLayout from "../../organisms/PageLayout";
import ImageHeader from "../../organisms/ImageHeader";
import Blurb from "../../atoms/Blurb";

import { fetchHome } from "../../actions";

import "./_styles.scss";

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchHome();
  }

  render() {
    const { name, statement, blurb, contact } = this.props;
    return (
      <PageLayout>
        <ImageHeader name={name} statement={statement} contact={contact} />
        <Container className="introduction">
          <Grid divided stackable columns={2}>
            <Grid.Column>
              <img src="/img/josh.jpg" className="pic" alt="Josh Benson" />
            </Grid.Column>
            <Grid.Column>
              <Blurb blurb={blurb} />
            </Grid.Column>
          </Grid>
        </Container>
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  statement: state.home.statement,
  blurb: state.home.blurb,
  contact: state.home.contact,
  name: state.home.name
});

export default connect(
  mapStateToProps,
  { fetchHome }
)(Home);
