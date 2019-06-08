import React from "react";
import { Header, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import PageLayout from "../../organisms/PageLayout";
import { fetchSkills } from "../../actions";

import "./_styles.scss";

class Skills extends React.Component {
  componentWillMount() {
    this.props.fetchSkills();
  }

  render() {
    const { skills } = this.props;
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
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { fetchSkills }
)(Skills);
