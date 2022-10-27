import React, { FC, MutableRefObject, useEffect, useState } from "react";
// External libraries
import styled, { css, keyframes } from "styled-components";

//******** COMPONENTS ********//

interface Props {
  message: string;
  type: "successful" | "warn" | "error";
  show: boolean;
  showAnimation: boolean;
  totalTime: number;
  timeStart: number;
  timeEnd: number;
  timeOut: MutableRefObject<NodeJS.Timeout | undefined>;
}

export const Message: FC<Props> = ({
  message,
  type = "successful",
  show,
  timeOut,
  showAnimation,
  totalTime,
  timeStart,
  timeEnd,
}) => {
  //--> Hooks

  const [opacity, setOpacity] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  //--> Effects

  useEffect(() => {
    if (show) {
      setShowAlert(true);
      timeOut.current = setTimeout(() => {
        setOpacity(1);
      }, 1);
    } else {
      timeOut.current = setTimeout(() => {
        setOpacity(0);
        setShowAlert(false);
      }, totalTime);
    }
    return () => clearTimeout(timeOut.current);
  }, [show]);

  //--> Renders

  return (
    <SMessage
      type={type}
      show={showAlert}
      showAnimation={showAnimation}
      opacity={opacity}
      timeStart={timeStart}
      timeEnd={timeEnd}
    >
      {message}
    </SMessage>
  );
};

//******** STYLES ********//

interface SProps {
  type: "successful" | "warn" | "error";
  show: boolean;
  showAnimation: boolean;
  opacity: number;
  timeStart: number;
  timeEnd: number;
}

const SWarnMessage = css`
  background-color: #f7b945;
  color: white;
`;

const SErrorMessage = css`
  background-color: #f54b4b;
  color: white;
`;

const SSuccessful = css`
  background-color: #44cd44;
  color: white;
`;

const AlertHide = css`
  transform: translateX(calc(100% + 40px));
`;

const AlertShow = css`
  transform: translateX(0px);
`;

const animationIn = keyframes`
  0%{
    ${AlertHide}
  }
  100%{
    ${AlertShow}
  }
`;

const animationOut = keyframes`
  0%{
    ${AlertShow}
  }
  100%{
    ${AlertHide}
  }
`;

const SMessage = styled.div<SProps>`
  position: fixed;
  right: 20px;
  top: 20px;
  display: ${(props) => (props.show ? "block" : "none")};
  opacity: ${(props) => props.opacity};
  animation: ${(props) => (props.showAnimation ? animationIn : animationOut)}
    ${(props) =>
      props.showAnimation ? `${props.timeStart}ms` : `${props.timeEnd}ms`}
    ease-in-out;
  padding: 15px 30px;
  border-radius: 10px;
  transition: all 500ms;
  ${(props) => props.type === "successful" && SSuccessful}
  ${(props) => props.type === "warn" && SWarnMessage}
  ${(props) => props.type === "error" && SErrorMessage}
`;
