import styled from "styled-components";
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/Timer";
import Model from "./components/Model/Model";
import { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { Helmet } from "react-helmet";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
    <Helmet>
        <title>Pom Loop - A Productivity Timer App for Efficient Study and Work</title>
        <meta
          name="description"
          content="Boost your productivity with Pom Loop, a powerful Pomodoro timer app designed to enhance your study and work sessions. Stay focused, manage your time effectively, and achieve more with this easy-to-use productivity tool."
        />
        <meta
          name="keywords"
          content="Pom Loop, Pomodoro timer app, productivity, study, work, time management, focus, efficiency, study sessions, work sessions, productivity tool, time tracker, time optimization, study app, work app, productivity app."
        />
      </Helmet>
      <Model isOpen={isOpen} onClose={onClose} />
      <Title>POM LOOP</Title>
      <Tags />
      <Timer />
      <CogIcon onClick={onOpen}>
        <AiFillSetting />
      </CogIcon>
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 5rem;
  padding: 2rem 0;
  text-align: center;
`;
const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;
