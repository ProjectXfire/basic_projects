import React, { useRef, useState } from "react";
import NextImage from "next/image";
// External libraries
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";
// Data
import { IReview, reviews as data } from "../data/reviews";

//******** COMPONENTS ********//

export const CardReview = () => {
  //--> Hooks

  const [reviews, setReviews] = useState<IReview[]>(data);
  const [reviewSelected, setSelectedReview] = useState<IReview>(data[0]);
  const maxData = useRef<number>(data.length);
  const initValue = useRef<number>(1);

  //--> Methods

  const checkNumber = () => {
    if (initValue.current > maxData.current) {
      initValue.current = 1;
      return;
    }
    if (initValue.current === 0) {
      initValue.current = maxData.current;
    }
  };

  const nextPrevious = (value: number) => {
    initValue.current += value;
    checkNumber();
    const review = reviews.find((review) => review.id === initValue.current)!;
    setSelectedReview(review);
  };

  const randomReview = () => {
    const random = Math.ceil(Math.random() * maxData.current);
    initValue.current = random;
    const review = reviews.find((review) => review.id === random)!;
    setSelectedReview(review);
  };

  //--> Renders

  return (
    <SCardReview>
      <SCardImgContainer>
        <SCardAvatar>
          <NextImage
            src={reviewSelected.image}
            alt={reviewSelected.name}
            layout="fill"
            objectFit="cover"
          />
        </SCardAvatar>
        <SCardBackground />
        <SIconAvatar>
          <FaQuoteRight />
        </SIconAvatar>
      </SCardImgContainer>
      <p>
        <strong>{reviewSelected.name}</strong>
      </p>
      <p>{reviewSelected.job}</p>
      <p>{reviewSelected.text}</p>
      <SCardActions>
        <button type="button" onClick={() => nextPrevious(1)}>{`<`}</button>
        <button type="button" onClick={() => nextPrevious(-1)}>{`>`}</button>
      </SCardActions>
      <SButtonRandom type="button" onClick={randomReview}>
        Surprise me
      </SButtonRandom>
    </SCardReview>
  );
};

//******** STYLES ********//

const SCardReview = styled.article`
  width: 90%;
  max-width: 500px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  & p {
    margin: 2px;
  }
  & p:nth-of-type(1) {
    text-transform: capitalize;
  }
  & p:nth-of-type(2) {
    text-transform: uppercase;
    color: #62beec;
  }
  & p:nth-of-type(3) {
    text-align: center;
  }
`;

const SCardImgContainer = styled.div`
  position: relative;
`;

const SIconAvatar = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 0;
  left: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #62beec;
  border-radius: 50%;
  z-index: 2;
  & svg {
    color: white;
  }
`;

const SCardAvatar = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
`;

const SCardBackground = styled.div`
  position: absolute;
  top: -4px;
  left: 5px;
  width: 120px;
  height: 120px;
  background-color: #62beec;
  border-radius: 50%;
  z-index: 1;
`;

const SCardActions = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  height: 50px;
  & button {
    height: 40px;
    width: 50px;
    background-color: white;
    border: none;
    color: #62beec;
    font-size: 1.5rem;
    &:active {
      border: 1px solid #62beec;
      border-radius: 5px;
    }
  }
`;

const SButtonRandom = styled.button`
  padding: 10px 25px;
  border: 1px solid #62beec;
  border-radius: 5px;
  color: #62beec;
  background-color: white;
  &:hover {
    color: white;
    border: 1px solid white;
    background-color: #62beec;
  }
  &:active {
    transform: scale(0.9);
  }
`;
