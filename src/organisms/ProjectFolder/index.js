import React from "react";
import Project from "../../molecules/Project";

class ProjectFolder extends React.Component {
  render() {
    const { portfolio } = this.props;
    if (portfolio) {
      return portfolio.map((project, idx) => {
        return (
          <Project
            key={project.product}
            {...project}
            divider={idx < portfolio.length - 1}
          />
        );
      });
    }

    return null;
  }
}

export default ProjectFolder;
