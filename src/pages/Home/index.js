import React from "react";
import { connect } from "react-redux";

import PageLayout from "../../organisms/PageLayout";
import ImageHeader from "../../organisms/ImageHeader";
import Introduction from "../../molecules/Introduction";
import SkillsList from "../../molecules/SkillList";

import {
  fetchHome,
  fetchSkills,
  fetchBrands,
  fetchContact
} from "../../actions";

import "./_styles.scss";
import BrandTable from "../../molecules/BrandTable";

class Home extends React.Component {
  componentWillMount() {
    this.props.fetchHome();
    this.props.fetchSkills();
    this.props.fetchBrands();
    this.props.fetchContact();
  }

  render() {
    const {
      name,
      statement,
      blurb,
      contact,
      picture,
      skills,
      brands
    } = this.props;
    return (
      <PageLayout>
        <ImageHeader
          name={name}
          statement={statement}
          contact={contact}
          page="home"
        />
        <Introduction blurb={blurb} picture={picture} name={name} />
        <SkillsList skills={skills} />
        <BrandTable brands={brands} />
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  statement: state.home.statement,
  blurb: state.home.blurb,
  name: state.home.name,
  picture: state.home.picture,
  skills: state.skills,
  brands: state.brands,
  contact: state.contact
});

export default connect(
  mapStateToProps,
  { fetchHome, fetchSkills, fetchBrands, fetchContact }
)(Home);
