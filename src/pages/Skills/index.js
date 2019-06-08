import React from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import PageLayout from "../../organisms/PageLayout";
import { fetchSkills } from "../../actions";

class Skills extends React.Component {
  componentWillMount() {
    this.props.fetchSkills();
  }

  render() {
    const { skills } = this.props;
    return (
      <PageLayout>
        <Header>Skills</Header>
        {skills && skills.map(skill => <div>{skill.name}</div>)}
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
