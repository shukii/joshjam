import React from "react";
import BrandImage from "../../atoms/BrandImage";
import SkillList from "../SkillList";
import ImageList from "../ImageList";

import "./_styles.scss";
import { Container, Divider } from "semantic-ui-react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Project extends React.Component {
  constructor() {
    super();
    this.generateProjectTitle = this.generateProjectTitle.bind(this);
  }

  generateProjectTitle() {
    const { product, link } = this.props;

    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {product}
          {"  "}
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      );
    }

    return product;
  }

  render() {
    const { brand, description, skills, images, divider } = this.props;

    return (
      <div>
        <Container className="project">
          <BrandImage {...brand} colour />
          <div className="project-title">{this.generateProjectTitle()}</div>
          <div className="project-description">{description}</div>
          <ImageList images={images} />
        </Container>
        <SkillList className="project-skills" skills={skills} />
        {divider && <Divider />}
      </div>
    );
  }
}

export default Project;
