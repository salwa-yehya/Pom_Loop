import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Formik, Form, Field } from "formik";
import { StateContext } from "../StateProvider";
import { useContext } from "react";

const ModelContainer = ({ isOpen, onClose }) => {
  const {
    workTime,
    setWorkTime,
    shortBreakTime,
    setshortBreakTime,
    longBreakTime,
    setlongBreakTime,
  } = useContext(StateContext);
  return (
    <Container>
      <ModelContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <ModelHeader>
          <ModelTitle>Setting</ModelTitle>
          <ModelCloseButton onClick={onClose}>
            <AiOutlineCloseCircle />
          </ModelCloseButton>
        </ModelHeader>
        <ModelBody>
          <Formik
            initialValues={{
              work: workTime / 60,
              short: shortBreakTime /60,
              long: longBreakTime/ 60,
            }}
            onSubmit={(values) => {
              setWorkTime(values.work * 60);
              setshortBreakTime(values.short *60);
              setlongBreakTime(values.long *60);
              onClose();
            }}
          >
            <Form>
              <InputWrapper>
                <FormControl>
                  <lable htmlFor="work">Work</lable>
                  <Field name="work" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <lable htmlFor="short">Short Break</lable>
                  <Field name="short" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <lable htmlFor="long">Long Break</lable>
                  <Field name="long" min="1" max="60" />
                </FormControl>
              </InputWrapper>
              <ButtonWrapper>
                <ApplyButton type="submit">Apply</ApplyButton>
              </ButtonWrapper>
            </Form>
          </Formik>
        </ModelBody>
      </ModelContent>
    </Container>
  );
};

export default ModelContainer;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  /* width :100vw; */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  z-index: 100;
`;
const ModelContent = styled(motion.div)`
  width: 40rem;
  height: 22rem;
  background-color: #fff;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 98%;
    margin-left: 2.5rem;
  }
`;
const ModelHeader = styled.div`
  color: #000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
`;
const ModelTitle = styled.h3`
  font-size: 3rem;
`;
const ModelCloseButton = styled.button`
  all: unset;
  font-size: 3rem;
  padding-top: 3px;
  color: #000000;
`;
const ModelBody = styled.div``;

const InputWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;
`;
const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #000;
  gap: 0.5rem;
  width: 30%;
  label {
    font-size: 2rem;
  }
  input {
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #ccc;
    background: #ead8fc;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
const ApplyButton = styled.button`
  all: unset;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background: #7a9e9f;
  border-radius: 0.5rem;
`;
