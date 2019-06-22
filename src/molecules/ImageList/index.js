import React from "react";
import { Image } from "semantic-ui-react";

import "./_styles.scss";

const ImageList = props => {
  return (
    <Image.Group size="large">
      {props.images.map(image => (
        <Image
          className="project-image"
          src={`/img/portfolio/${image}`}
          alt={image}
          bordered
          rounded
        />
      ))}
    </Image.Group>
  );
};

export default ImageList;
