import React from "react";
// Components
import { MainLayout, TitlePage } from "../../modules/shared/components";
import { CardReview } from "../../modules/03-Reviews/components";

const ReviewsPage = () => {
  return (
    <MainLayout title="Reviews App" content="Reviews">
      <TitlePage title="Our Reviews" />
      <CardReview />
    </MainLayout>
  );
};

export default ReviewsPage;
