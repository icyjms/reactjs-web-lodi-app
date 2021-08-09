import React, { useState } from 'react';
import {
  DivRelative,
  PhoneContainer,
  StepImage,
  StepsContainer,
  StepsFlex,
} from './how-it-works-styles';
import { Steps } from 'antd';
import {
  item_variants_y,
  variants,
} from 'components/styledComponents/motion-variants';

import Section from 'components/Section';
import Step1 from 'assets/img/steps/book-a-delivery.svg';
import Step2 from 'assets/img/steps/wait-for-rider.svg';
import Step3 from 'assets/img/steps/handover.svg';
import Step4 from 'assets/img/steps/track-your-package.svg';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { HIWdata } from 'utils/config';
import 'antd/dist/antd.css';

const { Step } = Steps;
const steps = [Step1, Step2, Step3, Step4];

const HowItWorks = () => {
  const [current_state, setCUrrentState] = useState(0);

  return (
    <Section>
      <Container maxW="12xl" px={[4, 8, 16]} py={[4, 8, 16]}>
        <Heading
          color="dark.100"
          mb={5}
          fontSize={{ base: '4xl', md: '6xl', lg: '7xl', '2xl': '8xl' }}
        >
          HOW IT WORKS
        </Heading>
        <StepsContainer variants={variants} initial="hidden" animate="visible">
          <DivRelative variants={item_variants_y}>
            <PhoneContainer></PhoneContainer>
            <StepsFlex>
              <StepImage src={steps[current_state]} />
            </StepsFlex>
          </DivRelative>
          <Flex
            direction="column"
            justifyContent="space-between"
            maxWidth="60% !important"
          >
            <Box pb={4}>
              <Text
                fontSize={{ base: 'md', sm: '2xl', '2xl': '2xl' }}
                color="gray.600"
              >
                Your safety matters to us{' '}
                <span style={{ fontSize: '16px' }}>
                  in the time of COVID-19. That is why we make sure every
                  delivery we make follows a strict set of procedures, always
                  with your health in mind.
                </span>
              </Text>
            </Box>
            <Steps
              data-test-id="hiw-steps"
              current={current_state}
              onChange={setCUrrentState}
              direction="vertical"
            >
              {HIWdata.map((item, i) => (
                <Step
                  key={i}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </Steps>
          </Flex>
        </StepsContainer>
      </Container>
    </Section>
  );
};

export default HowItWorks;
