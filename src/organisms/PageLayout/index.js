import React from 'react';
import NavigationBar from '../../molecules/NavigationBar';
import { Container } from 'semantic-ui-react';

import './_styles.scss';

const PageLayout = ({ children }) => (
  <div className="page-layout">
    <NavigationBar/>
    <Container>
      <div className="page-content">{children}</div>
    </Container>
  </div>
);

export default PageLayout;
