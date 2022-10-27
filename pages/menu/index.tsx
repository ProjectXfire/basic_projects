import React from "react";
// Variables
import { colors } from "../../modules/05-Menu/variables/colors";
// Components
import { Menu } from "../../modules/05-Menu/components";
import { MainLayout, TitlePage } from "../../modules/shared/components";

const MenuPage = () => {
  return (
    <MainLayout title="Menu App" content="Menu">
      <TitlePage title="Our Menu" underlineColor={colors.primary} />
      <Menu />
    </MainLayout>
  );
};

export default MenuPage;
