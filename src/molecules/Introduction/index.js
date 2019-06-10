import React from "react";

import { Grid, Container } from "semantic-ui-react";

import Blurb from "../../atoms/Blurb";

const Introduction = props => {
  const { picture, blurb, name } = props;
  return (
    <Container className="introduction">
      <Grid stackable columns={2}>
        <Grid.Column>
          <img src={`/img/${picture}`} className="pic" alt={name} />
        </Grid.Column>
        <Grid.Column>
          <Blurb blurb={blurb} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Introduction;
