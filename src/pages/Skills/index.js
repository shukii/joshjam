import React from "react";
import { Header, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import PageLayout from "../../organisms/PageLayout";
import { fetchSkills, fetchBrands } from "../../actions";

import "./_styles.scss";

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
        {skills &&
          skills.map(skill => {
            return (
              <Label key={skill.name} className={`skill-label-${skill.type}`}>
                {skill.name}
              </Label>
            );
          })}
        <Header>Brands</Header>
        <Grid stackable columns={3} verticalAlign="middle">
          {brands &&
            brands.map(brand => (
              <Grid.Column>
                <img
                  className="brand-image"
                  key={brand.name}
                  src={`/img/brands/${brand.image}`}
                  alt={brand.name}
                />
              </Grid.Column>
            ))}
        </Grid>
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
