import React from "react";
import BrandImage from "../../atoms/BrandImage";
import SkillList from "../SkillList";
import ImageList from "../ImageList";

import "./_styles.scss";

class Project extends React.Component {
  render() {
    const { brand, product, description, skills, images } = this.props;
    return (
      <div className="project">
        <BrandImage {...brand} />
        <div>{product}</div>
        <div>{description}</div>
        <SkillList skills={skills} />
        <ImageList images={images} />
      </div>
    );
  }
}

export default Project;
