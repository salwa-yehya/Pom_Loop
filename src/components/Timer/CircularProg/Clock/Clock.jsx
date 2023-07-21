import styled from "styled-components";
import { useEffect, useContext } from "react";
import { StateContext } from "../../../StateProvider";
const Clock = () => {
  const { time, setTime, isActive, setIsActive, initTime } =
    useContext(StateContext);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      // بنقص 1 كل ثانيه حد ما يوصل صفر بوقف
      return () => clearInterval(interval);
    }
  }, [time, isActive]);

  const toggleClock = () => {
    setIsActive(!isActive);
  };
  const resetTime = () => {
    setTime(initTime);
    setIsActive(false);
  };



  const getTime = (time) => {
    const min = Math.floor(time / 60); // 120sec / 60 = 2min
    const sec = time % 60; //120sec % 60 = 0 sec
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
    //
  };

  //this code creates a countdown timer by decrementing the time state variable every second (1000 milliseconds) until it reaches zero. Once the component is unmounted or when the effect is cleaned up, it stops the timer by clearing the interval.

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={toggleClock}>
        {isActive ? "Pause" : "Start"}
      </StartPauseButton>
      {time === 0 && <ResetButton onClick={resetTime} >reset</ResetButton>}
    </ClockContainer>
  );
};

export default Clock;
const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;
const TimerText = styled.h3`
  font-size: 8rem;
`;
const StartPauseButton = styled.button`
  all: unset;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  margin-top: 2rem;
`;
const ResetButton = styled(StartPauseButton)`
  color: red;
  letter-spacing: 0.3rem;
`;
