import React from "react";
// Components
import { MainLayout } from "@modules/shared/components";
import { Cart, Navbar } from "@modules/14-Cart/components";

const CartPage = () => {
  return (
    <MainLayout title="Cart App" content="Cart" flexCenter={false}>
      <Navbar />
      <Cart />
    </MainLayout>
  );
};

export default CartPage;
