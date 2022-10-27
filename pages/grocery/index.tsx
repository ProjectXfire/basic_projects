import React from "react";
import { GroceryBud } from "../../modules/10-Grocery/components";
// Components
import { MainLayout, TitlePage } from "../../modules/shared/components";

const GroceryBudPage = () => {
  return (
    <MainLayout title="Grocery Bud App" content="Grocery Bud Generator">
      <GroceryBud />
    </MainLayout>
  );
};

export default GroceryBudPage;
