import React, { FC, useEffect, useRef, useState } from "react";
// External libraries
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// Data
import { IQuestion } from "../data/questions";

//******** COMPONENTS ********//

interface Props {
  question: IQuestion;
}

export const Question: FC<Props> = ({ question }) => {
  //--> Hooks

  const [showAnswer, setShowAnswer] = useState(false);
  const answerRefCont = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLParagraphElement>(null);

  //--> Methods

  const handleAnswer = () => {
    const heightAnswer = answerRef.current?.getBoundingClientRect().height;
    if (showAnswer) {
      answerRefCont.current!.style.height = "0px";
      answerRefCont.current!.style.transition = "all 500ms";
      setShowAnswer(false);
    } else {
      answerRefCont.current!.style.height = `${heightAnswer}px`;
      answerRefCont.current!.style.transition = "all 500ms";
      setShowAnswer(true);
    }
  };

  //--> Renders

  return (
    <SQuestion>
      <SHeaderQuestion>
        <SQuestionTitle>{question.title}</SQuestionTitle>
        {!showAnswer ? (
          <SButtonIcon type="button" onClick={handleAnswer}>
            <AiOutlinePlus />
          </SButtonIcon>
        ) : (
          <SButtonIcon type="button" onClick={handleAnswer}>
            <AiOutlineMinus />
          </SButtonIcon>
        )}
      </SHeaderQuestion>
      <SAnswer ref={answerRefCont}>
        <p ref={answerRef}>{question.info}</p>
      </SAnswer>
    </SQuestion>
  );
};

//******** STYLES ********//

const SQuestion = styled.div`
  padding: 15px;
  border: 1px solid #eae6eb;
  border-radius: 5px;
  overflow: hidden;
`;

const SHeaderQuestion = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const SQuestionTitle = styled.span`
  font-weight: bold;
`;

const SAnswer = styled.div`
  height: 0;
  overflow: hidden;
`;

const SButtonIcon = styled.button`
  display: flex;
  padding: 10px;
  background-color: #eae6eb;
  border: 1px solid white;
  border-radius: 50%;
  & svg {
    color: #b4345c;
  }
  &:focus {
    border: 1px solid #b4345c;
  }
`;
