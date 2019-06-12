import React from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import PageLayout from "../../organisms/PageLayout";
// import ProjectFolder from "../../organisms/ProjectFolder";
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
        <Header className="header">Portfolio</Header>
        <div className="coming">Coming soon</div>
        {/* <ProjectFolder portfolio={portfolio} /> */}
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
