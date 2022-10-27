import React from "react";
// Components
import { MainLayout, TitlePage } from "../../modules/shared/components";
// Components
import { Reviews } from "../../modules/07-Slider/components";
const SliderPage = () => {
  return (
    <MainLayout title="Slider App" content="Slider">
      <TitlePage title="Slider - Reviews" underlineColor="red" />
      <Reviews />
    </MainLayout>
  );
};

export default SliderPage;
