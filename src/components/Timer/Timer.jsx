import styled  from 'styled-components';
import CircularProgress from './CircularProg/CircularProgress';


const Timer = () => {
  return (
    <TimerContainer>
        <CircularProgress/>
    </TimerContainer>
  )
}

export default Timer


const TimerContainer = styled.div`
    width :35rem;
    height :35rem ;
    background : #111e24;
    margin : 3rem auto ;
    border-radius :50%;
    display :grid;
    place-items :center;
    box-shadow :-50px -10px 150px rgba(0 , 0 , 0 ,0.2),10px -10px 20px rgba(0, 0, 0, 0.3)
`