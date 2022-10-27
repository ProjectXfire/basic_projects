import React, { useContext } from "react";
// Contexts
import { UIContext } from "@modules/13-Stripe-Menu/context/uiContext";
// Data
import { sublinks } from "@modules/13-Stripe-Menu/data/menu";
// Components
import { MainLayout, Sidebar } from "@modules/shared/components";
import { Stripe, BackgroundHero } from "@modules/13-Stripe-Menu/components";
import { MenuSidebar } from "@modules/13-Stripe-Menu/components/cMenuSidebar";

const StripeMenuPage = () => {
  //--> Hooks

  const {
    state: { isOpen },
    toggleSidebar,
  } = useContext(UIContext);

  //--> Renders

  return (
    <MainLayout
      title="Stripe Menu App"
      content="Stripe Menu"
      flexCenter={false}
    >
      <BackgroundHero>
        <Stripe />
      </BackgroundHero>
      <Sidebar isOpen={isOpen} onClose={toggleSidebar}>
        {sublinks.map((sublink) => (
          <MenuSidebar key={sublink.page} sublink={sublink} />
        ))}
      </Sidebar>
    </MainLayout>
  );
};

export default StripeMenuPage;
