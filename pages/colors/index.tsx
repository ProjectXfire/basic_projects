import React from "react";
// Components
import { ColorsGenerator } from "../../modules/09-Colors/components";
import { MainLayout, TitlePage } from "../../modules/shared/components";

const ColorGeneratorPage = () => {
  return (
    <MainLayout title="Colors Generator App" content="Colors Generator">
      <TitlePage title="Colors Generator" />
      <ColorsGenerator />
    </MainLayout>
  );
};

export default ColorGeneratorPage;
