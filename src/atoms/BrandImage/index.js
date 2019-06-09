import React from "react";

import "./_styles.scss";

const BrandImage = props => (
  <img
    className="brand-image"
    src={`/img/brands/${props.image}`}
    alt={props.name}
  />
);

export default BrandImage;
