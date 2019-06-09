import React from "react";
import { Grid } from "semantic-ui-react";

import "./_styles.scss";

class BrandTable extends React.Component {
  render() {
    const { brands } = this.props;
    if (brands) {
      return (
        <Grid stackable columns={3} verticalAlign="middle">
          {brands &&
            brands.map(brand => (
              <Grid.Column key={brand.name}>
                <img
                  className="brand-image"
                  src={`/img/brands/${brand.image}`}
                  alt={brand.name}
                />
              </Grid.Column>
            ))}
        </Grid>
      );
    }

    return null;
  }
}

export default BrandTable;
