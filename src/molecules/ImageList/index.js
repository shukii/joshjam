import React from "react";
import { Grid } from "semantic-ui-react";

import "./_styles.scss";

const ImageList = props => {
  return (
    <Grid stackable columns={3}>
      {props.images.map(image => (
        <Grid.Column key={image}>
          <img
            className="project-image"
            src={`/img/portfolio/${image}`}
            alt={image}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default ImageList;
