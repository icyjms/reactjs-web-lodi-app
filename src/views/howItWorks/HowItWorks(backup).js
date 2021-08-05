import React, { useState } from 'react';
import Section from 'components/Section';
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  EnvironmentOutlined,
  GiftTwoTone,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { ReactComponent as Step1 } from 'assets/img/steps/step1.svg';
import { ReactComponent as Step2 } from 'assets/img/steps/step2.svg';
import { ReactComponent as Step3 } from 'assets/img/steps/step3.svg';
import { ReactComponent as Step4 } from 'assets/img/steps/step4.svg';
import { Steps } from 'antd';
import { TimeIcon } from '@chakra-ui/icons';
import 'antd/dist/antd.css';

const { Step } = Steps;
function HowItWorks() {
  const [current, setCurrentState] = useState(0);
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];
  const handleOnChange = (step) => {
    setCurrentState(step);
  };

  return (
    <Section>
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Heading
          color="dark.100"
          mb={5}
          fontSize={{ base: '4xl', md: '6xl', lg: '7xl', '2xl': '8xl' }}
        >
          HOW IT WORKS
        </Heading>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Center p={10}>{steps[current]}</Center>
          <Flex direction="column" justifyContent="space-evenly">
            <Box pb={2}>
              <Text
                fontSize={{ base: 'md', md: 'xl', lg: 'xl', '2xl': '2xl' }}
                color="gray.400"
              >
                Your safety matters to us in the time of COVID-19. That is why
                we make sure every delivery we make follows a strict set of
                procedures, always with your health in mind.
              </Text>
            </Box>
            <Steps
              current={3}
              onChange={(step) => handleOnChange(step)}
              direction="vertical"
            >
              <Step
                title="Book a delivery"
                description="Provide the necessary information for the delivery"
                icon={<UnorderedListOutlined />}
              />
              <Step
                title="Wait for a Rider"
                description="Wait for a Rider to be assigned, and to arrive at the pickup location"
                icon={<TimeIcon />}
              />
              <Step
                title="Handover your packages"
                description="Let the Rider handle and deliver your packages"
                icon={<GiftTwoTone />}
              />
              <Step
                title="Track your package"
                description="Track the progress of your booking in real-time"
                icon={<EnvironmentOutlined />}
              />
            </Steps>
          </Flex>
        </Stack>
      </Container>
    </Section>
  );
}

export default HowItWorks;
