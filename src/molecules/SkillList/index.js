import React from "react";
import { Container } from "semantic-ui-react";
import SkillLabel from "../../atoms/SkillLabel";

class SkillList extends React.Component {
  render() {
    const { skills } = this.props;
    if (skills) {
      return (
        <div className="skills-list">
          <Container>
            {skills.map(skill => (
              <SkillLabel key={skill.name} {...skill} />
            ))}
          </Container>
        </div>
      );
    }

    return null;
  }
}

export default SkillList;
