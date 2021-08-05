import styled from 'styled-components';
import { Breakpoints } from 'styles';
import { motion } from 'framer-motion';

const { sm } = Breakpoints;

const HowItWorksContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: auto;
  padding: 15px;

  & * {
    color: var(--dim-dark);
  }

  & h1 {
    color: var(--dark) !important;
  }
`;

const StepsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 1 300px;

  & > div {
    margin: 15px;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    max-width: 350px;
  }

  @media ${`${sm.max}`} {
    & > div:last-child {
      display: flex;
      align-items: center;
      max-width: 250px;
    }
  }

  & .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon,
  & .ant-steps-item-finish .ant-steps-item-icon,
  &
    .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-tail::after {
    background-color: var(--dark);
    border-color: var(--dark);
  }
  & .ant-steps-item-finish .ant-steps-item-icon * {
    color: var(--theme);
  }

  & .ant-steps-item-container {
    min-height: 100px;
  }
`;

const DivRelative = styled(motion.div)`
  position: relative;
`;

const PhoneContainer = styled.div`
  position: relative;
  height: 500.8px;
  width: 250px;
`;

const StyledDiv = styled(motion.div)``;

const PhoneBackground = styled.img`
  width: 250px;
  height: auto;
  position: absolute;
  z-index: 1;
`;

const StepsFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  padding: 10px;
  width: 250px;
  height: 500.8px;
`;

const StepImage = styled.img`
  width: 100%;
  height: auto;
`;

export {
  HowItWorksContainer,
  StepsContainer,
  DivRelative,
  PhoneContainer,
  PhoneBackground,
  StepsFlex,
  StepImage,
  StyledDiv,
};
