import React from "react";
import { Label } from "semantic-ui-react";

import "./_styles.scss";

class SkillList extends React.Component {
  render() {
    const { skills } = this.props;
    if (skills) {
      return skills.map(skill => {
        return (
          <Label key={skill.name} className={`skill-label-${skill.type}`}>
            {skill.name}
          </Label>
        );
      });
    }
  }
}

export default SkillList;
