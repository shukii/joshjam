import React from "react";
import { Container, Header } from "semantic-ui-react";
import SkillLabel from "../../atoms/SkillLabel";

class SkillList extends React.Component {
  render() {
    const { skills } = this.props;
    if (skills) {
      return (
        <Container>
          <Header>Skills</Header>
          {skills.map(skill => (
            <SkillLabel key={skill.name} {...skill} />
          ))}
        </Container>
      );
    }

    return null;
  }
}

export default SkillList;
