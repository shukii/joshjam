import React from "react";
import { Grid, Container, Header } from "semantic-ui-react";
import BrandImage from "../../atoms/BrandImage";

class BrandTable extends React.Component {
  render() {
    const { brands } = this.props;
    if (brands) {
      return (
        <Container>
          <Header>Brands</Header>
          <Grid stackable columns={3} verticalAlign="middle">
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
