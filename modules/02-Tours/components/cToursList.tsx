import React, { FC, useState } from "react";
// External libraries
import styled from "styled-components";
// Interfaces
import { ITour } from "../interfaces";
import { TourCard } from "./cTourCard";

interface Props {
  tours: ITour[];
}

export const ToursList: FC<Props> = ({ tours }) => {
  // Hooks

  const [tempTours, setTempTours] = useState(tours);

  // Methods

  const removeTour = (id: string) => {
    const updatedTours = tempTours.filter((tour) => tour.id !== id);
    setTempTours(updatedTours);
  };

  // Renders

  return (
    <SListContainer>
      {tempTours.map((tour) => (
        <TourCard
          key={tour.id}
          tour={tour}
          remove={(id: string) => removeTour(id)}
        />
      ))}
    </SListContainer>
  );
};

const SListContainer = styled.section`
  width: 90vw;
  max-width: 500px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
