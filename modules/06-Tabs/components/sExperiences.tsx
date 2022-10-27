import React, { FC, useEffect, useState } from "react";
// External libraries
import styled from "styled-components";
// Interfaces
import { IExperience } from "../interfaces";
// Components
import { SidebarMenu } from "./sSidebarMenu";
import { Info } from "./sInfo";

//******** COMPONENTS ********//

interface Props {
  experiences: IExperience[];
}

export const Experiences: FC<Props> = ({ experiences }) => {
  //--> Hooks

  const [expSelected, setExpSelected] = useState<IExperience>(experiences[0]);
  const [companies, setCompanies] = useState<string[]>([]);

  //--> Methods

  const handleCompany = (company: string) => {
    const expSelected = experiences.find((exp) => exp.company === company);
    if (!expSelected) return;
    setExpSelected(expSelected);
  };

  //--> Effects

  useEffect(() => {
    const companies = experiences.map((exp) => exp.company);
    setCompanies(companies);
  }, [experiences]);

  //--> Renders

  return (
    <SExperiences>
      <SidebarMenu companies={companies} onSelectCompany={handleCompany} />
      <Info experience={expSelected} />
    </SExperiences>
  );
};

//******** STYLES ********//

const SExperiences = styled.section`
  width: 90%;
  display: flex;
  gap: 40px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
