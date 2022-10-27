import React from "react";
// Data
import { questionsData } from "../data/questions";
// External libraries
import styled from "styled-components";
// Components
import { Question } from "./cQuestion";

//******** COMPONENTS ********//

export const Questions = () => {
  return (
    <SQuestionsContainer>
      <STitleQuestions>Question And Answer About Login</STitleQuestions>
      <SBodyQuestion>
        {questionsData.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </SBodyQuestion>
    </SQuestionsContainer>
  );
};

//******** STYLES ********//

const SQuestionsContainer = styled.section`
  width: 90vw;
  max-width: 900px;
  padding: 30px;
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  border-radius: 10px;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 4fr;
    gap: 50px;
  }
`;

const STitleQuestions = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const SBodyQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
