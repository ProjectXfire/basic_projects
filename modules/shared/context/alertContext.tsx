import { createContext, ReactNode, useEffect, useRef, useState } from "react";
// Components
import { Message } from "../components";

interface IAlertContextProps {
  onShowAlert: (
    message: string,
    time: number,
    type: "successful" | "warn" | "error"
  ) => void;
}

interface IAlertValuesProps {
  show: boolean;
  showAnimation: boolean;
  totalTime: number;
  timeStart: number;
  timeEnd: number;
  keepTime: number;
  message: string;
  type: "successful" | "warn" | "error";
}

export const AlertContext = createContext({} as IAlertContextProps);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  //--> Variables

  const totalTime = useRef<NodeJS.Timeout>();
  const startTime = useRef<NodeJS.Timeout>();
  const timeOut = useRef<NodeJS.Timeout>();

  //--> Hooks

  const [alertValues, setAlertValues] = useState<IAlertValuesProps>({
    show: false,
    showAnimation: false,
    timeStart: 0,
    timeEnd: 0,
    totalTime: 0,
    keepTime: 0,
    message: "",
    type: "successful",
  });

  //--> Methods

  const onShowAlert = (
    message: string,
    time: number,
    type: "successful" | "warn" | "error"
  ) => {
    const timeStart = time * 0.1;
    const timeEnd = time * 0.1;
    const keepTime = time * 0.8;
    setAlertValues({
      message,
      totalTime: time,
      timeStart,
      timeEnd,
      keepTime,
      show: true,
      showAnimation: true,
      type,
    });
  };

  //--> Effects

  useEffect(() => {
    if (alertValues.show) {
      startTime.current = setTimeout(() => {
        setAlertValues({ ...alertValues, showAnimation: false });
      }, alertValues.timeStart + alertValues.keepTime);
      totalTime.current = setTimeout(() => {
        setAlertValues({
          ...alertValues,
          message: "",
          show: false,
          timeStart: 0,
          timeEnd: 0,
          totalTime: 0,
          keepTime: 0,
          type: "successful",
        });
      }, alertValues.totalTime);
    }
    return () => {
      clearTimeout(totalTime.current);
      clearTimeout(startTime.current);
    };
  }, [alertValues.show]);

  //--> Renders

  return (
    <AlertContext.Provider value={{ onShowAlert }}>
      <Message
        message={alertValues.message}
        type={alertValues.type}
        show={alertValues.show}
        timeOut={timeOut}
        showAnimation={alertValues.showAnimation}
        totalTime={alertValues.totalTime}
        timeStart={alertValues.timeStart}
        timeEnd={alertValues.timeEnd}
      />
      {children}
    </AlertContext.Provider>
  );
};
