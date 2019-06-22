import React from "react";
import { connect } from "react-redux";
import PageLayout from "../../organisms/PageLayout";
import ProjectFolder from "../../organisms/ProjectFolder";
import ImageHeader from "../../organisms/ImageHeader";
import { fetchPortfolio } from "../../actions";

import "./_styles.scss";

class Portfolio extends React.Component {
  componentWillMount() {
    this.props.fetchPortfolio();
  }

  render() {
    // const { portfolio } = this.props;
    return (
      <PageLayout>
        <ImageHeader name="Portfolio" page="portfolio" />
        <ProjectFolder portfolio={this.props.portfolio} />
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { fetchPortfolio }
)(Portfolio);
