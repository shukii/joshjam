import React from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import PageLayout from "../../organisms/PageLayout";
import SkillList from "../../molecules/SkillList";
import BrandTable from "../../molecules/BrandTable";
import { fetchSkills, fetchBrands } from "../../actions";

class Skills extends React.Component {
  componentWillMount() {
    this.props.fetchSkills();
    this.props.fetchBrands();
  }

  render() {
    const { skills, brands } = this.props;
    return (
      <PageLayout>
        <Header>Skills</Header>
        <SkillList skills={skills} />
        <Header>Brands</Header>
        <BrandTable brands={brands} />
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills,
  brands: state.brands
});

export default connect(
  mapStateToProps,
  { fetchSkills, fetchBrands }
)(Skills);
