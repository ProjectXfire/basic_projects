import React, { useState } from "react";
// External libraries
import styled from "styled-components";
// Data
import { loremIpsusData } from "../data/lorem";
// Components
import { Counter } from "./cCounter";

//******** COMPONENTS ********//

export const LoremIpsum = () => {
  //--> Hooks

  const [paragraphs, setParagraphs] = useState<string[]>([]);

  //--> Methods

  const onGenerateParagraphs = (value: number) => {
    const showParagraphs = loremIpsusData.slice(0, value);
    setParagraphs(showParagraphs);
  };

  //--> Renders

  return (
    <SParagraphs>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <SParagraphsActions>
        <span>Paragraphs</span>
        <Counter maxValue={loremIpsusData.length}>
          {({ value }) => (
            <SBtnGenerate
              type="button"
              onClick={() => onGenerateParagraphs(value)}
            >
              GENERATE
            </SBtnGenerate>
          )}
        </Counter>
      </SParagraphsActions>
      {paragraphs.map((p, index) => (
        <SParagraph key={index}>{p}</SParagraph>
      ))}
    </SParagraphs>
  );
};

//******** STYLES ********//

const SParagraphs = styled.div`
  width: 90%;
  max-width: 800px;
`;

const SParagraphsActions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const SBtnGenerate = styled.button`
  padding: 10px 15px;
  background-color: #0084ff;
  border: 1px solid #46a5ff;
  border-radius: 4px;
  color: white;
  &:active {
    transform: scale(0.9);
  }
`;

const SParagraph = styled.p`
  color: #6992b9;
`;
