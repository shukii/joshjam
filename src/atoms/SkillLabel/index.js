import React from "react";
import { Label } from "semantic-ui-react";
import "./_styles.scss";

const SkillLabel = props => {
  const { type, name } = props;
  return <Label className={`skill-label skill-label-${type}`}>{name}</Label>;
};

export default SkillLabel;
