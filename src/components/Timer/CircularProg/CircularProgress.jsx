import styled from "styled-components";
import { useContext, useEffect } from 'react';
import Clock from "./Clock/Clock";
import { StateContext } from "../../StateProvider";

const CircularProgress = () => {

 const {progress , setProgress , time , initTime} = useContext(StateContext);
// 200sec 
//200 /100 == 2
//200/2=100

 useEffect(()=>{
  setProgress(time / (initTime /100));
 },[setProgress , time])
  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Clock/>
      </InnerCircle>
    </OuterCircle>
  );
};

export default CircularProgress;

const OuterCircle = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background :conic-gradient(
    #7a9e9f ${({progress})=>progress}% ,
   transparent ${({progress})=>progress}%
   );
`;
const InnerCircle = styled.div`
  width: 28.5rem;
  height: 28.5rem;
  background: #111e22;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
