import React from "react";
import { Grid, Container } from "semantic-ui-react";
import BrandImage from "../../atoms/BrandImage";

import "./_styles.scss";

class BrandTable extends React.Component {
  render() {
    const { brands } = this.props;
    if (brands) {
      return (
        <Container>
          <Grid stackable columns={4} textAlign="center" verticalAlign="middle">
            {brands &&
              brands.map(brand => (
                <Grid.Column key={brand.name}>
                  <BrandImage {...brand} />
                </Grid.Column>
              ))}
          </Grid>
        </Container>
      );
    }

    return null;
  }
}

export default BrandTable;
