import React, { useState } from "react";
// External libraries
import styled from "styled-components";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
// Data
import { peopleData } from "../data/people";
// Components
import { Review } from "./cReview";

//******** COMPONENTS ********//

export const Reviews = () => {
  //--> Hooks

  const [selectedIndex, setSelectedIndex] = useState(0);

  //--> Methods

  const handleSlider = (next: number) => {
    if (selectedIndex + next < 0)
      return setSelectedIndex(peopleData.length - 1);
    if (selectedIndex + next >= peopleData.length) return setSelectedIndex(0);
    setSelectedIndex(selectedIndex + next);
  };

  //--> Renders

  return (
    <SReviews>
      {peopleData.map((person, index) => (
        <Review
          key={person.id}
          review={person}
          index={index}
          selectedIndex={selectedIndex}
        />
      ))}
      <SButtonSlider
        top={180}
        left={0}
        type="button"
        onClick={() => handleSlider(1)}
      >
        <HiArrowCircleLeft />
      </SButtonSlider>
      <SButtonSlider
        top={180}
        right={0}
        type="button"
        onClick={() => handleSlider(-1)}
      >
        <HiArrowCircleRight />
      </SButtonSlider>
    </SReviews>
  );
};

//******** STYLES ********//

interface SBtnProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const SReviews = styled.section`
  width: 80vw;
  max-width: 800px;
  position: relative;
  margin-top: 30px;
  display: flex;
  height: 450px;
  overflow: hidden;
`;

const SButtonSlider = styled.button<SBtnProps>`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  right: ${(props) => `${props.right}px`};
  bottom: ${(props) => `${props.bottom}px`};
  transform: translateY(-50%);
  display: flex;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  &:focus {
    & svg {
      color: red;
    }
  }
  & svg {
    color: #656b84;
    font-size: 30px;
  }
`;
