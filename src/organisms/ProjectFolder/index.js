import React from "react";
import Project from "../../molecules/Project";

class ProjectFolder extends React.Component {
  render() {
    const { portfolio } = this.props;
    if (portfolio) {
      return portfolio.map(project => {
        return <Project key={project.product} {...project} />;
      });
    }

    return null;
  }
}

export default ProjectFolder;
