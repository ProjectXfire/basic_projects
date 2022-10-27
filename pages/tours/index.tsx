import React from "react";
import { GetStaticProps, NextPage } from "next";
// Services
import { getTours } from "../../modules/02-Tours/services";
// Interfaces
import { ITour } from "../../modules/02-Tours/interfaces";
// Components
import { MainLayout, TitlePage } from "../../modules/shared/components";
import { ToursList } from "../../modules/02-Tours/components";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const tours = await getTours(process.env.TOURS_API || "");
  return {
    props: {
      tours,
    },
  };
};

interface Props {
  tours: ITour[];
}

const ToursPage: NextPage<Props> = ({ tours }) => {
  return (
    <MainLayout title="Tours App" content="Tours">
      <TitlePage title="Our Tours" />
      <ToursList tours={tours} />
    </MainLayout>
  );
};

export default ToursPage;
