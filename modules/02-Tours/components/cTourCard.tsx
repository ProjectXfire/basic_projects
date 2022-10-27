import React, { FC, useState } from "react";
import Image from "next/image";
// Interfaces
import { ITour } from "../interfaces";
// Components
import styled from "styled-components";

//******** COMPONENTS ********//

interface Props {
  tour: ITour;
  remove: (id: string) => void;
}

export const TourCard: FC<Props> = ({ tour, remove }) => {
  // Hooks

  const [showMore, setShowMore] = useState(tour.info.length > 100);

  // Renders

  return (
    <Card>
      <CardImage>
        <Image
          src={tour.image}
          alt={tour.name}
          layout="fill"
          objectFit="cover"
        />
      </CardImage>
      <CardBody>
        <CardHeader>
          <p>
            <strong>{tour.name}</strong>
          </p>
          <p>${tour.price}</p>
        </CardHeader>
        <CardContent>
          {showMore ? `${tour.info.slice(0, 210)}...  ` : `${tour.info}  `}
          {showMore ? (
            <BtnRead type="button" onClick={() => setShowMore(false)}>
              More
            </BtnRead>
          ) : (
            <BtnRead type="button" onClick={() => setShowMore(true)}>
              Less
            </BtnRead>
          )}
        </CardContent>
        <CardActions>
          <Button type="button" onClick={() => remove(tour.id)}>
            Not interested
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  );
};

//******** STYLES ********//

const Card = styled.article`
  position: relative;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
`;

const CardBody = styled.div`
  padding: 10px 20px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  & p:nth-of-type(2) {
    color: red;
    font-weight: 500;
  }
`;

const CardContent = styled.div`
  margin: 15px 0;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px 20px;
  border: 1px solid red;
  color: red;
  border-radius: 2px;
  background-color: white;
`;

const BtnRead = styled.button`
  background-color: transparent;
  border: 1px solid blue;
  border-radius: 10px;
  color: blue;
  &:active {
    transform: scale(0.9);
  }
`;
