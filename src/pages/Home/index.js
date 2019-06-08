import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import PageLayout from '../../organisms/PageLayout';
import { fetchHome } from '../../actions';

import "./_styles.scss";

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchHome();
  }

  render() {
    const {statement, blurb} = this.props;
    return (
      <PageLayout>
        <Grid columns={2}>
          <Grid.Column>
            <img src="/img/josh.jpg" className="pic" alt="Josh Benson"/>
          </Grid.Column>
          <Grid.Column>
            <div className="statement">{statement}</div>
            <div className="blurb">{blurb}</div>
          </Grid.Column>
        
        </Grid>
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  statement: state.home.statement,
  blurb: state.home.blurb,
});

export default connect(
  mapStateToProps,
  {fetchHome},
)(Home);