import React, { useState } from "react";
// External libraries
import styled from "styled-components";
// Data
import { Person, persons } from "../data/persons";
// Components
import { ListBirthdays } from "./cListBirthdays";

export const CardBirthdays = () => {
  const [people, setPeople] = useState<Person[]>(persons);

  return (
    <SCardBirthdays>
      <h3>{people.length} birthdays today</h3>
      <ListBirthdays people={people} />
      <SButton type="button" onClick={() => setPeople([])}>
        Clear all
      </SButton>
    </SCardBirthdays>
  );
};

const SCardBirthdays = styled.section`
  width: 90vw;
  max-width: 400px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 6px;
  -webkit-box-shadow: 50px 50px 30px 5px rgba(0, 0, 0, 0.18);
  box-shadow: 50px 50px 30px 5px rgba(0, 0, 0, 0.18);
`;

const SButton = styled.button`
  color: white;
  width: 100%;
  border-color: transparent;
  background-color: transparent;
  background-image: linear-gradient(
    90deg,
    rgba(255, 0, 117, 1) 0%,
    rgba(242, 138, 181, 1) 100%,
    rgba(242, 138, 178, 1) 100%
  );
  background-repeat: no-repeat;
  margin: 2rem auto 0 auto;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  letter-spacing: 0.1rem;
  border-radius: 0.7rem;
  transition: all 200ms;
  &:active {
    transform: scale(0.98);
  }
`;
