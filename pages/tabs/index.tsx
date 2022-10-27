import React from "react";
import { GetStaticProps, NextPage } from "next";
// Interfaces
import { IExperience } from "../../modules/06-Tabs/interfaces";
// Services
import { getExperiences } from "../../modules/06-Tabs/services";
// Variables
import { colors } from "../../modules/06-Tabs/variables/colors";
// Components
import { Experiences } from "../../modules/06-Tabs/components";
import { MainLayout, TitlePage } from "../../modules/shared/components";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const experiences = await getExperiences(process.env.TABS_API || "");
  return {
    props: {
      experiences,
    },
  };
};

interface Props {
  experiences: IExperience[];
}

const TabsPage: NextPage<Props> = ({ experiences }) => {
  return (
    <MainLayout title="Tabs App" content="Tabs">
      <TitlePage title="Experience" underlineColor={colors.secondary} />
      <Experiences experiences={experiences} />
    </MainLayout>
  );
};

export default TabsPage;
