import React from "react";

const ImageList = props => {
  return props.images.map(image => (
    <img src={`/img/portfolio/${image}`} alt={image} />
  ));
};

export default ImageList;
