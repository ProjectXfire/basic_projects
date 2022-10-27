import type { NextPage } from "next";
import NextLink from "next/link";
import NextImage from "next/image";
// External libraries
import styled from "styled-components";
// Data
import { projects } from "../modules/shared/data/projects";
// Components
import { MainLayout, TitlePage } from "../modules/shared/components";

const Home: NextPage = () => {
  return (
    <MainLayout title="Basics App" content="Basics">
      <TitlePage title="Basic Projects" />
      <Projects>
        {projects.map((project) => (
          <NextLink key={project.title} href={project.href}>
            <Project>
              <NextImage
                src={project.image}
                alt={project.title}
                objectFit="cover"
                width={300}
                height={200}
              />
              <div>
                <strong>{project.title}</strong>
              </div>
            </Project>
          </NextLink>
        ))}
      </Projects>
    </MainLayout>
  );
};

export default Home;

const Projects = styled.div`
  width: 90%;
  max-width: 1100px;
  /*display: flex;
  flex-wrap: wrap;
  justify-content: center;*/
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Project = styled.a`
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 500ms;
  cursor: pointer;
  & div {
    text-align: center;
    margin-top: 10px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
