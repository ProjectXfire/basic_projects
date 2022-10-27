import React from "react";
// Components
import { LoremIpsum } from "../../modules/08-Lorem/components";
import { MainLayout, TitlePage } from "../../modules/shared/components";

const LoremIpsusPage = () => {
  return (
    <MainLayout title="Lorem Ipsum App" content="Lorem Ipsum">
      <TitlePage title="Lorem Ipsum" />
      <LoremIpsum />
    </MainLayout>
  );
};

export default LoremIpsusPage;
