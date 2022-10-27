import React, { ChangeEvent, useState } from "react";
// External libraries
import styled from "styled-components";
// External libraries
import Values from "values.js";
// Components
import { BoxColor } from "./cBoxColor";

//******** COMPONENTS ********//

const regexHex = /^#(?:[0-9a-f]{3}){1,2}$/i;

export const ColorsGenerator = () => {
  //--> Hooks

  const [colors, setColors] = useState<Values[]>([]);
  const [value, setValue] = useState("");

  //--> Methods

  const onGenerateColors = () => {
    const hexColor = value.match(regexHex);
    if (!hexColor) return alert("Invalid hex color value");
    const colors = new Values(hexColor.toString());
    setColors(colors.all());
  };

  const onSetValueColor = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  //--> Renders

  return (
    <SGenerator>
      <SGeneratorHeader>
        <span>Color Generator</span>
        <input
          placeholder="Ex: #b6a863"
          type="text"
          onChange={onSetValueColor}
          value={value}
        />
        <button type="button" onClick={onGenerateColors}>
          Generate
        </button>
      </SGeneratorHeader>
      <SGeneratorBody>
        {colors.map(({ hex, weight, type }, index) => (
          <BoxColor key={hex + index} hex={hex} weight={weight} type={type} />
        ))}
      </SGeneratorBody>
    </SGenerator>
  );
};

//******** STYLES ********//

const SGenerator = styled.section`
  width: 90%;
  max-width: 1000px;
  margin-top: 10px;
`;

const SGeneratorHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & span {
    font-weight: bold;
    font-size: 1.3rem;
  }
  & input {
    width: 120px;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-size: 1.1rem;
    text-align: center;
    &:focus {
      border-bottom: 1.5px solid #2196f3;
    }
  }
  & button {
    padding: 8px 16px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #2196f3;
    color: white;
    &:hover {
      background-color: white;
      color: #2196f3;
      border: 1px solid #2196f3;
    }
  }
`;

const SContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SGeneratorBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;
