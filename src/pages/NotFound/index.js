import React from "react";
import PageLayout from "../../organisms/PageLayout";
import ImageHeader from "../../organisms/ImageHeader";
import { Header } from "semantic-ui-react";
import "./_styles.scss";

const NotFound = () => (
  <PageLayout>
    <ImageHeader name="Page not found" page="not-found" />
    <div className="filler">
      <Header>Sorry, we couldn't find the page you are looking for</Header>
    </div>
  </PageLayout>
);

export default NotFound;
