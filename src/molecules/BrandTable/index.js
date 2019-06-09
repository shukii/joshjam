import React from "react";
import { Grid } from "semantic-ui-react";
import BrandImage from "../../atoms/BrandImage";

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
                <BrandImage {...brand} />
              </Grid.Column>
            ))}
        </Grid>
      );
    }

    return null;
  }
}

export default BrandTable;
