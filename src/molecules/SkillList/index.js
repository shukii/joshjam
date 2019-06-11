import React from "react";
import { Label, Container, Header } from "semantic-ui-react";

import "./_styles.scss";

class SkillList extends React.Component {
  render() {
    const { skills } = this.props;
    if (skills) {
      return (
        <Container>
          <Header>Skills</Header>
          {skills.map(skill => (
            <Label
              key={skill.name}
              className={`skill-label skill-label-${skill.type}`}
            >
              {skill.name}
            </Label>
          ))}
        </Container>
      );
    }

    return null;
  }
}

export default SkillList;
