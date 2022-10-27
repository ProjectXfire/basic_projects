import React from "react";
// Components
import { Navbar } from "../../modules/11-Navbar/components";
import { MainLayout } from "../../modules/shared/components";

const NavbarPage = () => {
  return (
    <MainLayout title="Navbar App" content="Navbar" flexCenter={false}>
      <Navbar />
    </MainLayout>
  );
};

export default NavbarPage;
