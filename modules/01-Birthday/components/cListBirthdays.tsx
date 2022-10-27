import React, { FC, useState } from "react";
import NextImage from "next/image";
// External libraries
import styled from "styled-components";
// Interfaces
import { Person } from "../data/persons";

interface Props {
  people: Person[];
}

export const ListBirthdays: FC<Props> = ({ people }) => {
  // Renders

  return (
    <>
      {people.map((person) => (
        <SPerson key={person.id}>
          <SAvatar>
            <NextImage src={person.image} layout="fill" objectFit="cover" />
          </SAvatar>
          <SDetail>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </SDetail>
        </SPerson>
      ))}
    </>
  );
};

const SPerson = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const SAvatar = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const SDetail = styled.div`
  & h4 {
    margin-bottom: 0.15rem;
  }
  & p {
    margin-top: 0.15rem;
  }
`;
