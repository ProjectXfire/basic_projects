import React from "react";
// Components
import { MainLayout, TitlePage } from "../../modules/shared/components";
import { Questions } from "../../modules/04-Accordion/components";

const AccordionPage = () => {
  return (
    <MainLayout title="Accordion App" content="Accordion" bgColor="#4B145B">
      <Questions />
    </MainLayout>
  );
};

export default AccordionPage;
