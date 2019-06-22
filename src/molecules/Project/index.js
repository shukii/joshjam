import React from "react";
import BrandImage from "../../atoms/BrandImage";
import SkillList from "../SkillList";
import ImageList from "../ImageList";

import "./_styles.scss";
import { Container } from "semantic-ui-react";

class Project extends React.Component {
  render() {
    const { brand, product, description, link, skills, images } = this.props;
    return (
      <div>
        <Container className="project">
          <BrandImage {...brand} colour />
          {link && (
            <div>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {product}
              </a>
            </div>
          )}
          <div>{description}</div>

          <ImageList images={images} />
        </Container>
        <SkillList skills={skills} />
      </div>
    );
  }
}

export default Project;
