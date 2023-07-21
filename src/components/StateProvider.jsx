import { createContext, useEffect, useState } from "react";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setshortBreakTime] = useState(5 *60);
  const [longBreakTime, setlongBreakTime] = useState(15 * 60);
  const [initTime, setInitTime] = useState(0);
  const [activeTag, setAciveTag] = useState(0);
  const [progress, setProgress] = useState(20);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
      default:
        break;
    }
  }, [activeTag, workTime, shortBreakTime, longBreakTime]);
  return (
    <StateContext.Provider
      value={{
        activeTag,
        setAciveTag,
        progress,
        setProgress,
        time,
        setTime,
        isActive,
        setIsActive,
        initTime,
        setInitTime,
        workTime,
        setWorkTime,
        shortBreakTime,
        setshortBreakTime,
        longBreakTime,
        setlongBreakTime,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
