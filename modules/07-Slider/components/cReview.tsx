import React, { FC } from "react";
import NextImage from "next/image";
// External libraries
import styled, { css } from "styled-components";
import { FaQuoteRight } from "react-icons/fa";
// Data
import { peopleData } from "../data/people";
// Interface
import { IPerson } from "../data/people";

//******** COMPONENTS ********//

interface Props {
  review: IPerson;
  index: number;
  selectedIndex: number;
}

export const Review: FC<Props> = ({ review, index, selectedIndex }) => {
  return (
    <SReview
      position={
        index === selectedIndex
          ? "active"
          : index === selectedIndex - 1 ||
            (selectedIndex === 0 && index === peopleData.length - 1)
          ? "last"
          : "next"
      }
    >
      <SReviewAvatar>
        <NextImage
          layout="fill"
          src={review.image}
          alt={review.name}
          objectFit="cover"
        />
      </SReviewAvatar>
      <SPersonInfo>
        <p>{review.name}</p>
        <p>{review.title}</p>
      </SPersonInfo>
      <SReviewInfo>{review.quote}</SReviewInfo>
      <SReviewIcon />
    </SReview>
  );
};

//******** STYLES ********//

interface SReviewProps {
  position: "next" | "last" | "active";
}

const activeSlide = css`
  opacity: 1;
  transform: translateX(0);
`;

const lastSlide = css`
  transform: translateX(-100%);
`;

const nextSlide = css`
  transform: translateX(100%);
`;

const SReview = styled.article<SReviewProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 500ms;
  opacity: 0;
  ${(props) => {
    if (props.position === "active") return activeSlide;
    if (props.position === "last") return lastSlide;
    return nextSlide;
  }}
`;

const SReviewAvatar = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 20px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  -webkit-box-shadow: 4px 0px 13px 5px rgba(161, 170, 211, 0.71);
  box-shadow: 4px 0px 13px 5px rgba(161, 170, 211, 0.71);
`;

const SPersonInfo = styled.div`
  margin-top: 18px;
  & p {
    margin: 0;
    text-align: center;
  }
  & p:nth-of-type(1) {
    text-transform: uppercase;
    color: red;
    font-weight: bold;
  }
  & p:nth-of-type(2) {
    text-transform: capitalize;
    color: #656b84;
    font-weight: bold;
  }
`;

const SReviewInfo = styled.p`
  color: #79809c;
  text-align: center;
`;

const SReviewIcon = styled(FaQuoteRight)`
  color: red;
  font-size: 2rem;
`;
