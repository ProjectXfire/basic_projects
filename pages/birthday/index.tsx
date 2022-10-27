import React from "react";
// Components
import { MainLayout } from "../../modules/shared/components";
import { CardBirthdays } from "../../modules/01-Birthday/components";

const BirthdayPage = () => {
  return (
    <MainLayout title="Birthday App" content="Reminder" bgColor="#F28AB2">
      <CardBirthdays />
    </MainLayout>
  );
};

export default BirthdayPage;
